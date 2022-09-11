'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const {Post} = require('./post.model');
require('dotenv').config();

const POSTGRES_URL = process.env.DATABASE_URL ||"postgresql://wlla:123@localhost:5432/newwdb" || process.env.HEROKU_POSTGRESQL_MAUVE_URL;
//DATABASE_URL=postgresql://<userName>:<password>@localhost:5433/<Dbname>

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
let sequelize = new Sequelize (POSTGRES_URL,sequelizeOption);

module.exports = {
  db: sequelize,
  Post: Post(sequelize, DataTypes)
}