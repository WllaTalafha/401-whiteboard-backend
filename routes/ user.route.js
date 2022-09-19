'use strict';
const express = require('express');
const router = express.Router();
const { signUp , login } = require( '../controllers/user.controller' );
const {saveUser} = require( '../middlewares/userAuth' );


router.post( '/signup',saveUser, signUp );
router.post( '/signin', login );

module.exports = router;