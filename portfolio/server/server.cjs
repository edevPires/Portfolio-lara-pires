const express = require('express');
const path = require('path');
const cors = require('cors');

const emailRouter = require('./src/modules/email/email.routes.cjs');

const app = express();
const PORT = process.env.PORT || 3001;

const buildPath = path.join(__dirname, 'public');

app.use(express.static(buildPath));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

console.log("Frontend URL: ", process.env.FRONTEND_URL);

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/api/email', emailRouter);

app.use((req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
