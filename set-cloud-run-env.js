/**
 * set-cloud-fn-env.js
 * Uses the Firebase CLI's existing access token to set runtime env vars
 * on the Cloud Functions v2 service via REST API.
 */

const https = require('https');
const os = require('os');
const path = require('path');
const fs = require('fs');

const PROJECT_ID = 'infcoded-labs';
const LOCATION = 'us-central1';
const FUNCTION_NAME = 'ssrinfcodedlabs';
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
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function main() {
  const accessToken = getAccessToken();
  console.log('✅ Got access token from Firebase CLI cache');

  // 1. Get current function config
  const getPath = `/v2/projects/${PROJECT_ID}/locations/${LOCATION}/functions/${FUNCTION_NAME}`;
  const getResult = await httpsRequest({
    hostname: 'cloudfunctions.googleapis.com',
    path: getPath,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
  });

  if (getResult.status !== 200) {
    console.error('❌ Failed to get function:', getResult.status, JSON.stringify(getResult.body, null, 2));
    process.exit(1);
  }

  const func = getResult.body;
  console.log(`✅ Got function (revision: ${func.serviceConfig?.revision})`);

  const existingEnvVars = func.serviceConfig?.environmentVariables || {};
  console.log('Current env vars:', Object.keys(existingEnvVars).join(', ') || 'none');

  // 2. Merge EMAIL_USER and EMAIL_PASS into existing env vars
  const updatedEnvVars = {
    ...existingEnvVars,
    EMAIL_USER,
    EMAIL_PASS,
  };

  const patchBody = {
    serviceConfig: {
      environmentVariables: updatedEnvVars,
    }
  };

  const patchPath = `/v2/projects/${PROJECT_ID}/locations/${LOCATION}/functions/${FUNCTION_NAME}?updateMask=serviceConfig.environmentVariables`;
  console.log('Patching Cloud Function with EMAIL_USER and EMAIL_PASS...');
  
  const patchResult = await httpsRequest({
    hostname: 'cloudfunctions.googleapis.com',
    path: patchPath,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
  }, patchBody);

  if (patchResult.status === 200) {
    console.log('\n✅ SUCCESS! Email env vars set on Cloud Function.');
    console.log('   Operation name:', patchResult.body.name || 'started');
    console.log('\n⏳ Wait ~2 minutes for the new revision to roll out, then test the form.');
  } else {
    console.error('❌ Failed to patch function:', patchResult.status);
    console.error(JSON.stringify(patchResult.body, null, 2));
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
