var express = require('express');
var router = express.Router();
var models = require('../models');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;


//Get single motherboard
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