require('dotenv').config();
const { version } = require('./package.json');
const express = require('express');

const app = express();
const port = process.env.SERVER_PORT;

app.get('/api/info', (req, res) => {
    res.send(`MOOMSOOLAND v${version}`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
