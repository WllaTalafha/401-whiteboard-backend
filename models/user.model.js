'use strict';

const User = (sequelize, DataTypes) => sequelize.define('User', {

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
        type: DataTypes.VIRTUAL
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'), defaultValue: 'user', allowNull: false
    },
    capabilites: {
        type: DataTypes.VIRTUAL,
        get() {
            const actions = {
                user: ['read', 'create'],
                admin: ['read', 'create', 'update', 'delete']
            }
            return (actions[this.role]);
        }
    }
});

module.exports = { User };