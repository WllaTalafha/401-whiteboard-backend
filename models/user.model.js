'use strict';

const User = ( sequelize, DataTypes ) => sequelize.define( 'User', {
    
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: true
    },
    token: {
        type:DataTypes.VIRTUAL
    }
} );

module.exports = {User};