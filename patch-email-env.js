/**
 * patch-email-env.js
 * 
 * Correctly patches the Cloud Function with EMAIL_USER and EMAIL_PASS
 * by merging them with ALL existing env vars (preserving Firebase system vars).
 * This triggers a proper Cloud Functions v2 update (new Cloud Run revision).
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

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', c => data += c);
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
  const token = getAccessToken();
  const base = `/v2/projects/${PROJECT_ID}/locations/${LOCATION}/functions/${FUNCTION_NAME}`;

  // Step 1: Fetch current function to get ALL existing env vars
  console.log('Fetching current Cloud Function config...');
  const get = await request({ hostname: 'cloudfunctions.googleapis.com', path: base, method: 'GET', headers: { Authorization: `Bearer ${token}` } });
  if (get.status !== 200) { console.error('GET failed:', get.status, get.body); process.exit(1); }

  const existing = get.body.serviceConfig?.environmentVariables || {};
  console.log(`Found ${Object.keys(existing).length} existing env vars:`, Object.keys(existing).join(', '));

  // Step 2: Merge EMAIL vars into ALL existing vars (not just EMAIL vars)
  const merged = { ...existing, EMAIL_USER, EMAIL_PASS };
  console.log('\nSetting:');
  console.log(`  EMAIL_USER = "${EMAIL_USER}"`);
  console.log(`  EMAIL_PASS = "${EMAIL_PASS}" (length: ${EMAIL_PASS.length})`);

  // Step 3: Patch with ALL vars merged (updateMask = serviceConfig.environmentVariables)
  const patch = await request({
    hostname: 'cloudfunctions.googleapis.com',
    path: `${base}?updateMask=serviceConfig.environmentVariables`,
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  }, { serviceConfig: { environmentVariables: merged } });

  if (patch.status === 200) {
    console.log('\n✅ Cloud Function update triggered!');
    console.log('   Operation:', patch.body.name);
    console.log('\n⏳ Waiting 90s for the new Cloud Run revision to go live...');

    // Wait 90 seconds for new revision
    await new Promise(r => setTimeout(r, 90000));

    // Step 4: Verify
    const verify = await request({ hostname: 'cloudfunctions.googleapis.com', path: base, method: 'GET', headers: { Authorization: `Bearer ${token}` } });
    const verifyEnv = verify.body.serviceConfig?.environmentVariables || {};
    console.log('\n=== Verification ===');
    console.log('State:', verify.body.state);
    console.log('Revision:', verify.body.serviceConfig?.revision);
    console.log('EMAIL_USER:', verifyEnv.EMAIL_USER || 'NOT SET');
    console.log('EMAIL_PASS:', verifyEnv.EMAIL_PASS ? `"${verifyEnv.EMAIL_PASS}" ✅` : 'NOT SET ❌');

    // Step 5: Test the live email API
    if (verifyEnv.EMAIL_USER && verify.body.state === 'ACTIVE') {
      console.log('\nTesting live email API...');
      const testBody = JSON.stringify({ instituteName: 'Live Test', ownerName: 'Asjad', whatsapp: '+91 99999 99999', category: 'Coaching', students: '50-100', notes: 'Automated verification test' });
      const emailTest = await new Promise((resolve, reject) => {
        const req = https.request({ hostname: 'infcodedlab.in', path: '/api/send-email', method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(testBody) } }, res => {
          let d = ''; res.on('data', c => d += c); res.on('end', () => { try { resolve({ status: res.statusCode, body: JSON.parse(d) }); } catch { resolve({ status: res.statusCode, body: d }); } });
        });
        req.on('error', reject);
        req.write(testBody); req.end();
      });
      console.log('API Response:', emailTest.status, JSON.stringify(emailTest.body));
      if (emailTest.body?.success) {
        console.log('\n🎉 EMAIL SENT! Check artexplore764@gmail.com');
      } else {
        console.log('\n❌ Email still failing:', emailTest.body?.error);
      }
    }
  } else {
    console.error('❌ PATCH failed:', patch.status, JSON.stringify(patch.body, null, 2));
    process.exit(1);
  }
}

main().catch(err => { console.error(err.message); process.exit(1); });
