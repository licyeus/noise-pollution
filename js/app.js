(function() {
  'use strict';

  var app = angular.module('noisePollution', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      });
  });

  app.controller('homeController', function() { });
}).call(this);
