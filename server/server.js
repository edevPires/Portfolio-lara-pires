const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const buildPath = path.join(__dirname, 'public');

app.use(express.static(buildPath));

app.use((req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
