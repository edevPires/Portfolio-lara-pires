const express = require('express');
const { sendEmail } = require('./email.controller.cjs');

const router = express.Router();

router.post('/send', sendEmail);

module.exports = router;
