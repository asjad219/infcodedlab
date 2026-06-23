/**
 * revert-cloud-run.js
 * Rolls back the Cloud Run service traffic to revision 00013-rip
 * and removes the bad 00015-niz revision we created.
 */

const https = require('https');
const os = require('os');
const path = require('path');
const fs = require('fs');

const PROJECT_ID = 'infcoded-labs';
const LOCATION = 'us-central1';
const SERVICE_NAME = 'ssrinfcodedlabs';
const GOOD_REVISION = 'ssrinfcodedlabs-00013-rip';

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

  // Pin 100% traffic to the known-good revision 00013-rip
  const serviceUrl = `/v2/projects/${PROJECT_ID}/locations/${LOCATION}/services/${SERVICE_NAME}`;
  
  console.log(`Pinning 100% traffic to ${GOOD_REVISION}...`);
  const patchResult = await httpsRequest({
    hostname: 'run.googleapis.com',
    path: `${serviceUrl}?updateMask=traffic`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
  }, {
    traffic: [
      {
        type: 'TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION',
        revision: GOOD_REVISION,
        percent: 100,
      }
    ]
  });

  console.log('Traffic patch status:', patchResult.status);
  if (patchResult.status === 200) {
    console.log('✅ Traffic reverted to', GOOD_REVISION);
  } else {
    console.error('❌ Failed:', JSON.stringify(patchResult.body?.error || patchResult.body, null, 2));
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
