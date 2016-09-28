var express = require('express');
var router = express.Router();
var validator = require('validator');
var rides = require('../database/ride.js');
var users = require('../database/user.js');
var mountains = require('../database/mountain.js');
var riders = require('../database/rider.js');
var passport = require('../passport.js');

router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var isLoggedIn = true;
  var user = req.user;
  rides.getRideData()
  .then(function(rideData) {
    res.render('rides',
      {username: user.username,
      rideData: rideData,
      user: user,
      loggedIn: isLoggedIn});
  });
});

router.get('/offer', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var isLoggedIn = true;
  var user = req.user;

  mountains.findMountains()
  .then(function(mountains) {
    users.findCarByUser(user.id)
    .then(function(data) {
      console.log("user: ", user.username);
      console.log("user ID: ", user.id);
      console.log(data)
      res.render('offerride', {
        user: user,
        mountains: mountains,
        loggedIn: isLoggedIn,
        data: data
      });
    });
  });
});

router.post('/offer', function(req, res, next) {
  var carID = req.body.carID;
  var mountainID = req.body.mountainID;
  var departureDate = req.body.departureDate;
  var departureTime = req.body.departureTime;
  var returnDate = req.body.returnDate;
  var returnTime = req.body.returnTime;
  var seatsAvailable = req.body.seatsAvailable;
  var costPerSeat = req.body.costPerSeat;
  var meetupLocation = req.body.meetupLocation;

  console.log(carID);
  console.log(mountainID);
  console.log(departureDate);
  console.log(departureTime);
  console.log(returnDate);
  console.log(returnTime);
  console.log(seatsAvailable);
  console.log(costPerSeat);
  console.log(meetupLocation);

  rides.addRide(carID, mountainID, departureDate, departureTime, returnDate, returnTime, seatsAvailable, costPerSeat, meetupLocation)
})


router.get('/offer', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var destination = req.body.destination;
  var user = req.user;
  console.log("user here: ", user.username);

  res.render('offerride', {
    user: user
  });
});

router.get('/:rideID', function(req, res, next){
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var user = req.user;
  var rideID = req.params.rideID;
  rides.getRideDataByRideID(rideID)
  .then(function(rideData){
    rides.getCarDataByRideID(rideID)
    .then(function(carData){
      riders.findRidersByRideID(rideID)
      .then(function(riderData){
        rides.getDriverRatingByRideID(rideID)
        .then(function(rating){
          var userRating = Math.round(rating.avg);
          res.render('ride', {rideData: rideData, carData: carData, riderData: riderData, rating: userRating, username: user.username, user: user});
        });
      });
    });
  });
});

router.post('/:rideID', function(req, res, next){
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var user = req.user;
  var rideID = req.params.rideID;
  var url = '/rides/' + rideID;
  users.findUser(user.username)
  .then(function(userData){
    var userID = userData[0].id;
    riders.addRiderToRide(rideID, userID)
    .then(function(){
      res.redirect(url);
    });
  });
});

router.get('/mountains/:mountainId', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/signup');
    return;
  }
  var signedinUser = req.user.username;
  var user = req.user;
  rides.getRideDataByMountainId(req.params.mountainId)
  .then(function(rideData) {
    res.render('rides',
      {username: signedinUser, rideData: rideData, user: user});
  });
});

module.exports = router;
