'use strict';

const {users} = require('../models/index');

const saveUser = async (req, res, next) => {
    try {
        const username = await users.findOne({
            where: {
                username: req.body.username
            }
        });
        if (username) {
            return res.status(409).send('Username already taken');
        }
        const email = await users.findOne({
            where: {
                email: req.body.email
            }
        });
        if (email) {
            return res.status(409).send('Email already taken');
        }
        next();
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    saveUser
};