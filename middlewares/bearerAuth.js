"use strict";

const { users } = require("../models/index");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function bearerAuth(req, res, next) {
    try {
        console.log(`Inside bearerAuth middleware`);
        const bearer = req.headers.authorization;
        const userToken = bearer.split(" ")[1];
        const parsedToken = jwt.verify(userToken, process.env.SECRET);
        const user = await users.findOne({ where: { username: parsedToken.username } });
        if (user) {
            req.user = user;
            next();
        } else {
            next("enter valid token");
        }
    } catch (e) {
        next("Invalid Login");
    }
}
module.exports = { bearerAuth };