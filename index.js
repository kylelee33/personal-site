const express = require('express')
const https = require('https');
const fs = require('fs');
const server = express();

const options = {
    cert: fs.readFileSync('../../etc/letsencrypt/live/www.kylehoganlee.com/fullchain.pem'),
    key: fs.readFileSync('../../etc/letsencrypt/live/www.kylehoganlee.com/privkey.pem')
};

server.use(express.static('public', {
    extensions: ['html', 'htm']
}))

const {PORT = 80} = process.env
server.listen(PORT, () => console.log("Listening at http://localhost:%s", PORT))
https.createServer(options, server).listen(8443);
