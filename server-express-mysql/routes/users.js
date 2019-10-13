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
      Password: authService.hashPassword(req.body.password)
    }
  })
    .spread(function (result, created) {
      if (created) {
        console.log(result);
        res.send('User Successfully Created');
      } else {
        res.send('This user')
      }
    });
});

router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {
    if (!user) {
      console.log('User not found')
      return res.status(401).json({
        message: "Login Failed"
      });
    } else {
      let passwordMatch = authService.comparePasswords(req.body.password, user.Password);
      if (passwordMatch) {
        let token = authService.signUser(user);
        res.cookie('jwt', token);
        res.send('Login successful');
      } else {
        console.log('Wrong password');
        res.send('Wrong password');
      }
    }
  });
});

router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    console.log(token);
    authService.verifyUser(token)
      .then(user => {
        if (user) {
          console.log(user);
          console.log(JSON.stringify(user));
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