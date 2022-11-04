require('dotenv').config();
const mongoose = require('mongoose');

const connect = () => {
    mongoose
        .connect(`${process.env.DB_URL}`, {})
        .then(() => console.log('MongoDB Connection ...'))
        .catch((err) => console.log(err));
};

module.exports = connect;
