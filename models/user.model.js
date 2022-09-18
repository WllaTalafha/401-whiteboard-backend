'use strict';

const User = ( sequelize, DataTypes ) => sequelize.define( 'User', {
    
    userame: {
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
    }
} );

module.exports = {User};