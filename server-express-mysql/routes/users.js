var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth');

router.post('/signup', function (req, res, next) {
  models.users.findOrCreate({
    where: { Username: req.body.username },
    defaults: {
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      Email: req.body.email,
      Password: req.body.password
    }
  })
    .spread(function (result, created) {
      if (created) {
        res.send('User Successfully Created');
      } else {
        res.send('This user')
      }
    });
});

router.post('/login', function (req, res, next) {
  models.users.findOne({ Username: req.body.username, Password: req.body.password })
    .then(user => {
      if (!user) {
        console.log('User not found');
        return res.status(401).json({ message: 'Login Failed' });
      } else {
        let token = authService.signUser(user);
        res.cookie('jwt', token);
        res.send('Login Successful');
      }
    });
});

router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token)
      .then(user => {
        if (user) {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(user));
        } else {
          res.status(401);
          res.send('Must be logged in');
        }
      });
  } else {
    res.status(401);
    res.send('Must be logged in');
  }
});

router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.send('Logged Out');
});


module.exports = router;