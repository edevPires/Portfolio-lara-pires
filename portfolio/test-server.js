require('dotenv').config();
const emailService = require('./server/src/modules/email/email.service.cjs');

// Test data
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  message: 'This is a test message to verify both emails are being sent.'
};

emailService.sendContactEmail(testData)
  .then(result => {
    console.log('✅ SUCCESS - Both emails sent!');
    console.log('Admin Message ID:', result.adminMessageId);
    console.log('User Message ID:', result.userMessageId);
    console.log('Result structure:', JSON.stringify(result, null, 2));
    process.exit(0);
  })
  .catch(error => {
    console.log('❌ ERROR:', error.message);
    process.exit(1);
  });
