'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "motherboards", deps: []
 * createTable "Projects", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-10-02T22:44:26.618Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "motherboards",
            {
                "MotherboardId": {
                    "type": Sequelize.INTEGER,
                    "field": "MotherboardId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "MotherboardName": {
                    "type": Sequelize.STRING,
                    "field": "MotherboardName"
                },
                "MotherboardPrice": {
                    "type": Sequelize.INTEGER,
                    "field": "MotherboardPrice"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Projects",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "createdBy": {
                    "type": Sequelize.STRING,
                    "field": "createdBy"
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
