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

  app.factory('userService', function($q) {
    // TODO: add users/auth

    var getCurrentUser = function() {
      return { name: 'Andrew Sullivan', email: 'licyeus@gmail.com' }
    };

    return {
      getCurrentUser: getCurrentUser
    };
  });

  app.factory('noiseDataService', function($q, userService) {
    var getNoiseData = function() {
      var deferred = $q.defer();

      var reporter = userService.getCurrentUser(); // TODO: mocking for now

      // TODO: pull from firebase
      // TODO: these are actual measurements (with approx time) add this data to firebase
      var noiseData = [
        { reporter: reporter, lat: '47.618780', lng: '-122.314280', db_level: '43.5', datetime: '2014-07-20 13:54:15 -0700' },
        { reporter: reporter, lat: '47.618770', lng: '-122.315600', db_level: '61.5', datetime: '2014-07-20 13:55:15 -0700' },
        { reporter: reporter, lat: '47.618750', lng: '-122.316900', db_level: '64.5', datetime: '2014-07-20 13:56:15 -0700' },
        { reporter: reporter, lat: '47.618740', lng: '-122.318210', db_level: '63.5', datetime: '2014-07-20 13:57:15 -0700' }
      ];

      deferred.resolve(noiseData);

      return deferred.promise;
    };

    var addData = function(point) {
      // TODO: add to firebase
    };

    return {
      getNoiseData: getNoiseData,
      addData: addData
    };
  });

  app.controller('homeController', function($scope, noiseDataService, userService) { 
    // TODO: remove me, only in place to ease development
    $scope.point = { lat: 47.603569, lng: -122.329453, db_level: 60, datetime: '2014-07-20 13:22:15 -0700' };

    noiseDataService.getNoiseData().then(function(data) { $scope.data = data; });

    $scope.addDataPoint = function() {
      if(true || $scope.pointForm.$valid) { // TODO: validations
        var dataPoint = $scope.point;
        dataPoint.reporter = userService.getCurrentUser();
        $scope.data.push(dataPoint);
        noiseDataService.addData($scope.point);

        $scope.point = {};
      }
    };

  });
}).call(this);
