/**
 * check-cloud-fn-env.js - reads the current env vars from the Cloud Function
 */

const https = require('https');
const os = require('os');
const path = require('path');
const fs = require('fs');

const PROJECT_ID = 'infcoded-labs';
const LOCATION = 'us-central1';
const FUNCTION_NAME = 'ssrinfcodedlabs';

function getAccessToken() {
  const configPath = path.join(os.homedir(), '.config', 'configstore', 'firebase-tools.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  return config.tokens.access_token;
}

function httpsRequest(options) {
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
    req.end();
  });
}

async function main() {
  const accessToken = getAccessToken();
  const getPath = `/v2/projects/${PROJECT_ID}/locations/${LOCATION}/functions/${FUNCTION_NAME}`;
  const result = await httpsRequest({
    hostname: 'cloudfunctions.googleapis.com',
    path: getPath,
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });

  if (result.status !== 200) {
    console.error('Failed:', result.status, result.body);
    return;
  }

  const envVars = result.body.serviceConfig?.environmentVariables || {};
  console.log('\n=== Cloud Function Env Vars ===');
  for (const [k, v] of Object.entries(envVars)) {
    if (k === 'EMAIL_USER' || k === 'EMAIL_PASS') {
      console.log(`${k} = "${v}" (length: ${v.length})`);
    } else {
      console.log(`${k} = [set]`);
    }
  }
  console.log('\nState:', result.body.state);
  console.log('Revision:', result.body.serviceConfig?.revision);
}

main().catch(console.error);
