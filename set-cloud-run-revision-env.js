/**
 * set-cloud-run-revision-env.js
 * Patches Cloud Run service directly to add EMAIL env vars.
 * This creates a new revision that actually sees the env vars at runtime.
 */

const https = require('https');
const os = require('os');
const path = require('path');
const fs = require('fs');

const PROJECT_ID = 'infcoded-labs';
const LOCATION = 'us-central1';
const SERVICE_NAME = 'ssrinfcodedlabs';
const EMAIL_USER = 'artexplore764@gmail.com';
const EMAIL_PASS = 'jihe sqwv meea jela';

function getAccessToken() {
  const configPath = path.join(os.homedir(), '.config', 'configstore', 'firebase-tools.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  return config.tokens.access_token;
}

function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function main() {
  const accessToken = getAccessToken();
  console.log('✅ Got access token');

  const serviceUrl = `/v2/projects/${PROJECT_ID}/locations/${LOCATION}/services/${SERVICE_NAME}`;
  
  // Get current service
  console.log('Getting Cloud Run service...');
  const getResult = await httpsRequest({
    hostname: 'run.googleapis.com',
    path: serviceUrl,
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });

  if (getResult.status !== 200) {
    console.error('Failed to get service:', getResult.status, JSON.stringify(getResult.body, null, 2));
    process.exit(1);
  }

  const service = getResult.body;
  console.log('✅ Got service, current revision:', service.latestCreatedRevision);
  
  const containers = service.template?.containers || [];
  const existingEnv = containers[0]?.env || [];
  const emailEnvNames = existingEnv.filter(e => e.name === 'EMAIL_USER' || e.name === 'EMAIL_PASS').map(e => `${e.name}=${e.value}`);
  console.log('Current EMAIL vars in template:', emailEnvNames.length > 0 ? emailEnvNames.join(', ') : 'NONE');

  // Remove old EMAIL vars and add new ones
  const filteredEnv = existingEnv.filter(e => e.name !== 'EMAIL_USER' && e.name !== 'EMAIL_PASS');
  const newEnv = [
    ...filteredEnv,
    { name: 'EMAIL_USER', value: EMAIL_USER },
    { name: 'EMAIL_PASS', value: EMAIL_PASS },
  ];

  // Create a new template WITHOUT a revision name (Cloud Run auto-generates one)
  const newTemplate = {
    ...service.template,
    revision: undefined,  // Let Cloud Run auto-generate a new revision name
    containers: [
      {
        ...containers[0],
        env: newEnv,
      },
      ...containers.slice(1),
    ]
  };
  // Remove revision key entirely
  delete newTemplate.revision;

  const patchBody = { template: newTemplate };

  console.log('Patching Cloud Run service (new revision will be created)...');
  const patchResult = await httpsRequest({
    hostname: 'run.googleapis.com',
    path: serviceUrl,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
  }, patchBody);

  console.log('Patch status:', patchResult.status);
  
  if (patchResult.status === 200) {
    console.log('\n✅ SUCCESS! Cloud Run service patched.');
    console.log('Latest revision:', patchResult.body.latestCreatedRevision);
    console.log('⏳ New revision will be live in ~1-2 minutes. Run node test-email.js to verify.');
  } else {
    console.error('❌ Patch failed:', patchResult.status);
    console.error(JSON.stringify(patchResult.body?.error || patchResult.body, null, 2));
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
