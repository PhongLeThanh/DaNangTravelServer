'use strict';
// const Bcrypt = require('bcrypt');
// const Moment = require('Moment');

module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        classMethods: {
            // associate: function (models) {
            //     user.hasOne(models.profile, {primaryKey:'id'});
            //     user.hasMany(models.comment,{foreignKey:"userId"})
            // },
            generateHash(password) {
                return Bcrypt.hashSync(password, Bcrypt.genSaltSync(8), null);
            }
        },
        instanceMethods: {
            validatePassword: function (password) {
                if (Bcrypt.compareSync(password, this.password))
                    return true;
                else
                    return false;
            },
            toJSON: function () {
                let values = Object.assign({}, this.get());
                delete values.password;
                return values;
            },
        },
        hooks: {
            beforeCreate: function (user, options) {
                if (user.changed('password')) {
                    user.password = this.generateHash(user.password);
                }
            },
            beforeUpdate: function (user, options) {
                if (user.changed('password')) {
                    user.password = this.generateHash(user.password);
                }
            },
        },
        privateColumns: ['password']
    });
    user.associate = models =>{
        models.user.hasOne(models.profile,{
            primaryKey:'id',foreignKey:'id'
        });
        models.user.hasMany(models.comment,{
            foreignKey:'userId'
        })
    };
    return user;
};