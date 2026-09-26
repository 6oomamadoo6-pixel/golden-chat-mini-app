const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname)));
app.get('/health', (_req, res) => res.status(200).json({ ok: true, app: 'golden-chat-mini-app' }));
app.get('*splat', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(port, '0.0.0.0', () => console.log(`Golden Chat Mini App listening on ${port}`));
