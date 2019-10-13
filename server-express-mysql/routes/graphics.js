var express = require('express');
var router = express.Router();
var models = require('../models');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;

//Get single graphics
//Graphics Cards 1
router.get('/data1', function (req, res, next) {
    models.graphics.findAll({
        where: {
            GraphicsId: {
                [Op.lt]: 2
            }
        }
    }).then(graphicsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(graphicsFound));
    });
});

//Graphics Cards 2
router.get('/data2', function (req, res, next) {
    models.graphics.findAll({
        where: {
            GraphicsId: {
                [Op.gt]: 1,
                [Op.lt]: 3
            }
        }
    }).then(graphicsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(graphicsFound));
    });
});

//Graphics Cards 3
router.get('/data3', function (req, res, next) {
    models.graphics.findAll({
        where: {
            GraphicsId: {
                [Op.gt]: 2,
                [Op.lt]: 4
            }
        }
    }).then(graphicsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(graphicsFound));
    });
});

//Graphics Cards 4
router.get('/data4', function (req, res, next) {
    models.graphics.findAll({
        where: {
            GraphicsId: {
                [Op.gt]: 3,
                [Op.lt]: 5
            }
        }
    }).then(graphicsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(graphicsFound));
    });
});


//Graphics Cards 5
router.get('/data5', function (req, res, next) {
    models.graphics.findAll({
        where: {
            GraphicsId: {
                [Op.gt]: 4,
                [Op.lt]: 6
            }
        }
    }).then(graphicsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(graphicsFound));
    });
});

//Graphics Cards 6
router.get('/data6', function (req, res, next) {
    models.graphics.findAll({
        where: {
            GraphicsId: {
                [Op.gt]: 5,
                [Op.lt]: 7
            }
        }
    }).then(graphicsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(graphicsFound));
    });
});

//Graphics Cards 7
router.get('/data7', function (req, res, next) {
    models.graphics.findAll({
        where: {
            GraphicsId: {
                [Op.gt]: 6,
                [Op.lt]: 8
            }
        }
    }).then(graphicsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(graphicsFound));
    });
});

//Graphics Cards 8
router.get('/data8', function (req, res, next) {
    models.graphics.findAll({
        where: {
            GraphicsId: {
                [Op.gt]: 7,
                [Op.lt]: 9
            }
        }
    }).then(graphicsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(graphicsFound));
    });
});

module.exports = router;