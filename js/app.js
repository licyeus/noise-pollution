(function() {
  'use strict';

  var app = angular.module('noisePollution', ['ui.router', 'angularMapbox']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      });
  });

  app.controller('homeController', function($scope) { 
    var currentUser = { name: 'Andrew Sullivan' }; // TODO: add users/auth

    $scope.point = { // TODO: create better add point UX
      lat: 47.603569,
      lng: -122.329453,
      db_level: 60,
      datetime: '2014-07-20 13:22:15 -0700'
    };

    $scope.data = [ // TODO: hook this up to firebase api
      { reporter: currentUser, db_level: '45', lat: '47.605705', lng: '-122.320343', datetime: '2014-07-20 13:22:15 -0700' },
      { reporter: currentUser, db_level: '53', lat: '47.635705', lng: '-122.310343', datetime: '2014-07-20 13:22:15 -0700' }
    ];

    $scope.addDataPoint = function() {
      if(true || $scope.pointForm.$valid) {
        $scope.data.push({
          reporter: currentUser,
          lat: $scope.point.lat,
          lng: $scope.point.lng,
          db_level: $scope.point.db_level,
          datetime: $scope.point.datetime
        });

        $scope.point = {};
      }
    };
  });
}).call(this);
