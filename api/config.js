// api/config.js
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // OPTIONS request (preflight)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Hanya GET
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Ambil dari environment variables Vercel
    const BOT_TOKEN = process.env.BOT_TOKEN || '';
    const CHAT_ID = process.env.CHAT_ID || '';

    // Kirim config (tanpa expose token ke browser secara langsung)
    res.status(200).json({
        BOT_TOKEN: BOT_TOKEN,
        CHAT_ID: CHAT_ID
    });
}
