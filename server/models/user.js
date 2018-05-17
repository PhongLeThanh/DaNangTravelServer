'use strict';
const Bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                private: true
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                }
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
            },
            avatar: {
                type: DataTypes.STRING
            },

        }, {
            hooks: {
                beforeCreate: function (users, options) {
                    if (users.changed('password')) {
                        users.password = this.generateHash(users.password);
                    }
                },
                beforeUpdate: function (users, options) {
                    if (users.changed('password')) {
                        users.password = this.generateHash(users.password);
                    }
                }
            }
        }
        // privateColumns: ['password']
        // });
        // }, {
        //     classMethods: {
        //         // associate: function (models) {
        //         //     user.hasOne(models.profile, {primaryKey:'id'});
        //         //     user.hasMany(models.comment,{foreignKey:"userId"})
        //         // },
        //         // generateHash(password) {
        //         //     return Bcrypt.hashSync(password, Bcrypt.genSaltSync(8), null);
        //         // }
        //     },
        //     instanceMethods: {
        //         validatePassword: function (password) {
        //             if (Bcrypt.compareSync(password, this.password))
        //                 return true;
        //             else
        //                 return false;
        //         },
        //         toJSON: function () {
        //             let values = Object.assign({}, this.get());
        //             delete values.password;
        //             return values;
        //         },
        //     },
        //     hooks: {
        //         beforeCreate: function (user, options) {
        //             if (user.changed('password')) {
        //                 user.password = this.generateHash(user.password);
        //             }
        //         },
        //         beforeUpdate: function (user, options) {
        //             if (user.changed('password')) {
        //                 user.password = this.generateHash(user.password);
        //             }
        //         },
        //     },
        //     privateColumns: ['password']
    );
    user.associate = models => {
        models.user.hasOne(models.profile, {
            primaryKey: 'id', foreignKey: 'id'
        });
        models.user.hasMany(models.comment, {
            foreignKey: 'userId'
        });
        models.user.hasMany(models.likeevent, {
            foreignKey: 'userId'
        })
    };

    user.generateHash = function (password) {
        return Bcrypt.hashSync(password, Bcrypt.genSaltSync(8), null);
    };
    user.prototype.validatePassword = function (password) {
        if (Bcrypt.compareSync(password, this.password))
            return true;
        else
            return false;
    };
    user.prototype.toJSON = function (password) {
        let values = Object.assign({}, this.get());
        delete values.password;
        return values;
    };

    // function beforeCreateUser(users, options) {
    //     if (users.changed('password')) {
    //         users.password = this.generateHash(users.password);
    //     }
    // };
    //
    // function beforeUpdateUser(users, options) {
    //     if (users.changed('password')) {
    //         users.password = this.generateHash(users.password);
    //     }
    // };

    return user;
};