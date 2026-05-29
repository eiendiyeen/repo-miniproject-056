const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Endpoint utama
app.get('/', (req, res) => {
    res.send(`
        <h1>Mini Project Azure Serverless</h1>
        <p>Aplikasi App Service berjalan.</p>
    `);
});

// Endpoint waktu
app.get('/waktu', (req, res) => {
    res.json({
        serverTime: new Date().toISOString()
    });
});

// Endpoint profil
app.get('/profil', (req, res) => {
    res.json({
        nama: 'Kesya',
        praktikum: 'Azure Serverless',
        layanan: [
            'Azure Static Web Apps',
            'Azure Functions',
            'Azure App Service',
            'Azure Container Apps'
        ]
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});
