require('dotenv').config();
const { version } = require('./package.json');
const connectDB = require('./db/connect.js');
const express = require('express');

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get('/api/info', (req, res) => {
    res.send(`MOOMSOOLAND v${version}`);
});

const user = require('./controller/User.js');
app.use('/api/users', user);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
    connectDB();
});
