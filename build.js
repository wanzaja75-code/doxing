// build.js - Jalankan saat deploy untuk mengganti placeholder
const fs = require('fs');
const path = require('path');

// Baca file index.html
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Ganti placeholder dengan environment variables
html = html.replace(/%%BOT_TOKEN%%/g, process.env.BOT_TOKEN || '');
html = html.replace(/%%CHAT_ID%%/g, process.env.CHAT_ID || '');

// Tulis hasilnya
fs.writeFileSync(htmlPath, html);
console.log('✅ Environment variables injected!');
