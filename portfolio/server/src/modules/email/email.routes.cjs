const express = require('express');
const router = express.Router();

router.post('/send', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Email enviado com sucesso!',
    });
});

module.exports = router;
