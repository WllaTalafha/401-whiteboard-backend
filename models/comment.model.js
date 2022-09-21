'use strict';

const Comment = (sequelize, DataTypes) => sequelize.define('Comment', {

  commentContent: {
    type: DataTypes.STRING,
    allowNull: false
  },

  commentID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  commentAuthorID:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  commentAuthor:{
    type: DataTypes.STRING
  }
})

module.exports = {Comment};