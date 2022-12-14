'use strict';

const server = require('./server');
const { db } = require('./models/index');
require('dotenv').config();

db.sync().then(() =>server.start(process.env.PORT || 3003))
.catch((err)=>console.log(err))

