'use strict'
// 第三方用户信息
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('userInRole', {
        userId: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        roleId: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    });
};