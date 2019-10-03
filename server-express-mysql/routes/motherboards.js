var express = require('express');
var router = express.Router();
var models = require('../models');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;


//Get All Motherboards for Home page
router.get('/data', function (req, res, next) {
    models.motherboards.findAll({
        where: {
            MotherboardId: {
                [Op.lt]: 7
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