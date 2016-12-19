


'use strict'

var all ={
    "port": 3000,
    "mysql": {
        "dbname": "test",
        "user": "root",
        "password": "1qaz@WSX",
        "options": {
            "host": "10.25.24.72",
            "port": 3306,
            "dialect": "mysql",
            "pool": {
                "max": 5,
                "min": 1
            },
            "define": {
                "freezeTableName": true, //模型名是否和数据库名称相同
                "paranoid": true, //是否标记删除
                "timestamps": true //是否标记删除 
            }
        }
    }
};

module.exports = all;