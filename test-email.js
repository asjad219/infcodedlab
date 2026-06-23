/**
 * test-email.js - sends a test email via the live API endpoint
 */
const https = require('https');

const testData = {
  instituteName: "Test Institute",
  ownerName: "Test User",
  whatsapp: "+91 99999 99999",
  category: "Coaching",
  students: "50-100",
  notes: "This is a test submission from the diagnostic script."
};

const postData = JSON.stringify(testData);

const options = {
  hostname: 'infcodedlab.in',
  path: '/api/send-email',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  }
};

console.log('Sending test email request to https://infcodedlab.in/api/send-email ...');

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    try {
      const parsed = JSON.parse(data);
      console.log('Response:', JSON.stringify(parsed, null, 2));
      if (parsed.success) {
        console.log('\n✅ EMAIL SENT SUCCESSFULLY! Check artexplore764@gmail.com');
      } else {
        console.log('\n❌ Email failed:', parsed.error);
      }
    } catch {
      console.log('Raw response:', data);
    }
  });
});

req.on('error', err => {
  console.error('Request error:', err.message);
});

req.write(postData);
req.end();
