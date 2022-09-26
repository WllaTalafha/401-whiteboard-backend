'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const {Post} = require('./post.model');
const {Comment} = require('./comment.model');
const {Collection} = require('../collections/user-comment-routes');
const {User} = require( './user.model' );
require('dotenv').config();

const POSTGRES_URL = process.env.DATABASE_URL;

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

let sequelize = new Sequelize (POSTGRES_URL,sequelizeOption);

sequelize.authenticate()
    .then(() => {
        console.log('Database connected to postgres DBMS');
    }).catch((err) => {
        console.log(err);
    });

let postModel = Post(sequelize, DataTypes);
let commentModel = Comment(sequelize, DataTypes);
let userModel = User(sequelize, DataTypes);

postModel.hasMany(commentModel, { foreignKey:'commentID', sourceKey:'id' });
commentModel.belongsTo(postModel, { foreignKey:'commentID', targetKey:'id' });

userModel.hasMany(commentModel, { foreignKey:'commentAuthorID', sourceKey:'id' });
commentModel.belongsTo(userModel, { foreignKey:'commentAuthorID', targetKey:'id' });

const postInstance = new Collection (postModel);
const commentInstance= new Collection (commentModel);

module.exports = {
  db: sequelize,
  posts: postModel,
  comments: commentModel,
  postCRUD:postInstance,
  commentCRUD:commentInstance,
  users: userModel
}