'use strict';
const express = require('express');
const router = express.Router();
const { signUp , login , allUsers} = require( '../controllers/user.controller' );
const {saveUser} = require( '../middlewares/userAuth' );
const { bearerAuth } = require('../middlewares/bearerAuth');


router.post( '/signup',saveUser, signUp );
router.post( '/signin', login );
router.get('/user', bearerAuth ,allUsers);

module.exports = router;