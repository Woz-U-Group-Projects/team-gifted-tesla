'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "GraphicsPrice" on table "graphics"
 * changeColumn "HddPrice" on table "hdds"
 * changeColumn "ProcessorPrice" on table "processors"
 * changeColumn "RamPrice" on table "rams"
 * changeColumn "SsdPrice" on table "ssds"
 *
 **/

var info = {
    "revision": 4,
    "name": "updated_all_models",
    "created": "2019-10-03T02:09:59.888Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "graphics",
            "GraphicsPrice",
            {
                "type": Sequelize.DECIMAL,
                "field": "GraphicsPrice"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "hdds",
            "HddPrice",
            {
                "type": Sequelize.DECIMAL,
                "field": "HddPrice"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "processors",
            "ProcessorPrice",
            {
                "type": Sequelize.DECIMAL,
                "field": "ProcessorPrice"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "rams",
            "RamPrice",
            {
                "type": Sequelize.DECIMAL,
                "field": "RamPrice"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ssds",
            "SsdPrice",
            {
                "type": Sequelize.DECIMAL,
                "field": "SsdPrice"
            }
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
