const User = require('../model/User.js');

const findUsers = (callback) => {
    return User.find({})
        .lean()
        .exec((err, users) => {
            callback(null, users);
        });
};

const insertUser = (params) => {
    const user = new User(params);
    user.save()
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        });
};

module.exports = { findUsers, insertUser };
