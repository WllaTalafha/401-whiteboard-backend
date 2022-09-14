'use strict';

const Comment = (sequelize, DataTypes) => sequelize.define('Comment', {

  commentContent: {
    type: DataTypes.STRING,
    allowNull: false
  },

  commentID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

})

module.exports = {Comment};