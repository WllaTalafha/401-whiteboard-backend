'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { users, comments } = require('../models/index');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const data = {
            username,
            email,
            password: await bcrypt.hash(password, 10)
        };
        const user = await users.create(data);
        if (user) {
            res.status(200).json(user);
        }
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    const basicHeader = req.headers.authorization.split(' ');
    const encodedValue = basicHeader.pop();
    const decodedValue = base64.decode(encodedValue);
    console.log(decodedValue);
    const [username, password] = decodedValue.split(':');
    const user = await users.findOne({
        where: {
            username: username
        }
    });
    if (user) {
        const isSame = await bcrypt.compare(password, user.password);
        if (isSame) {
            let newToken = jwt.sign({ username: user.username }, process.env.SECRET);
            user.token = newToken;
            res.status(200).json(user);
        } else {
            res.status(401).send('Enter correct password');
        }
    } else {
        res.status(401).send("you don't have account");
    }
};

async function allUsers(req, res) {
    try {
        const allUsers = await users.findAll({include:comments});
        res.send(allUsers);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    signUp,
    login,
    allUsers
};