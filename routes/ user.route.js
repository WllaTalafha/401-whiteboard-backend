'use strict';

const { signUp,login } = require( '../controllers/user.controller' );
const {saveUser} = require( '../middlewares/userAuth' );

const router = require( 'express' ).Router();

router.post( '/signup', saveUser, signUp );
router.post( '/signin', login );

module.exports = router;