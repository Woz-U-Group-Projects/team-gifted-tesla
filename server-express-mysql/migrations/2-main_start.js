'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "graphics", deps: []
 * createTable "hdds", deps: []
 * createTable "processors", deps: []
 * createTable "rams", deps: []
 * createTable "ssds", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "main_start",
    "created": "2019-10-02T23:00:56.678Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "graphics",
            {
                "GraphicsId": {
                    "type": Sequelize.INTEGER,
                    "field": "GraphicsId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "GraphicsName": {
                    "type": Sequelize.STRING,
                    "field": "GraphicsName"
                },
                "GraphicsPrice": {
                    "type": Sequelize.INTEGER,
                    "field": "GraphicsPrice"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "hdds",
            {
                "HddId": {
                    "type": Sequelize.INTEGER,
                    "field": "HddId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "HddName": {
                    "type": Sequelize.STRING,
                    "field": "HddName"
                },
                "HddPrice": {
                    "type": Sequelize.INTEGER,
                    "field": "HddPrice"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "processors",
            {
                "ProcessorId": {
                    "type": Sequelize.INTEGER,
                    "field": "ProcessorId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "ProcessorName": {
                    "type": Sequelize.STRING,
                    "field": "ProcessorName"
                },
                "ProcessorPrice": {
                    "type": Sequelize.INTEGER,
                    "field": "ProcessorPrice"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "rams",
            {
                "RamId": {
                    "type": Sequelize.INTEGER,
                    "field": "RamId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "RamName": {
                    "type": Sequelize.STRING,
                    "field": "RamName"
                },
                "RamPrice": {
                    "type": Sequelize.INTEGER,
                    "field": "RamPrice"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ssds",
            {
                "SsdId": {
                    "type": Sequelize.INTEGER,
                    "field": "SsdId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "SsdName": {
                    "type": Sequelize.STRING,
                    "field": "SsdName"
                },
                "SsdPrice": {
                    "type": Sequelize.INTEGER,
                    "field": "SsdPrice"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName"
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName"
                },
                "Email": {
                    "type": Sequelize.STRING,
                    "field": "Email",
                    "unique": true
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username",
                    "unique": true
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
