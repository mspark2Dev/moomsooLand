const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        maxlength: 256,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
