var express = require('express');
var router = express.Router();
var models = require('../models');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;


//Get single motherboard
//Motherboard 1
router.get('/data1', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.lt]: 2
            }
        }
    }).then(motherboardsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(motherboardsFound));
    });
});

//Motherboard 2
router.get('/data2', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.gt]: 1,
                [Op.lt]: 3
            }
        }
    }).then(motherboardsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(motherboardsFound));
    });
});

//Motherboard 3
router.get('/data3', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.gt]: 2,
                [Op.lt]: 4
            }
        }
    }).then(motherboardsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(motherboardsFound));
    });
});

//Motherboard 4
router.get('/data4', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.gt]: 3,
                [Op.lt]: 5
            }
        }
    }).then(motherboardsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(motherboardsFound));
    });
});


//Motherboard 5
router.get('/data5', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.gt]: 4,
                [Op.lt]: 6
            }
        }
    }).then(motherboardsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(motherboardsFound));
    });
});

//Motherboard 6
router.get('/data6', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.gt]: 5,
                [Op.lt]: 7
            }
        }
    }).then(motherboardsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(motherboardsFound));
    });
});

//Motherboard 7
router.get('/data7', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.gt]: 6,
                [Op.lt]: 8
            }
        }
    }).then(motherboardsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(motherboardsFound));
    });
});

//Motherboard 8
router.get('/data8', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.gt]: 7,
                [Op.lt]: 9
            }
        }
    }).then(motherboardsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(motherboardsFound));
    });
});

//Get Motherboards by ID for specific pages
router.get('/data/:id', function (req, res, next) {
    let motherboardsId = parseInt(req.params.id);
    models.motherboards.findOne({
        where: {
            MotherboardId: motherboardsId
        }
    })
        .then(motherboard => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(motherboard));
        });
});

module.exports = router;