const router = require('express').Router();
const userDB = require('../db/controller/User.js');

router.get('', (req, res) => {
    userDB.findUsers((err, users) => {
        if (err) return res.json(err);
        res.json(users);
    });
});

router.post('', (req, res) => {
    res.json(userDB.insertUser(req.body));
});

module.exports = router;
