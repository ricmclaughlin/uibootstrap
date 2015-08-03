'use strict';

/**
 * @ngdoc overview
 * @name uibootstrapApp
 * @description
 * # uibootstrapApp
 *
 * Main module of the application.
 */
angular
  .module('uibootstrapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/toolbox', {
        templateUrl: 'views/toolbox.html',
        controller: 'ToolboxCtrl',
        controllerAs: 'toolbox'
      })
      .when('/bootsketch', {
        templateUrl: 'views/bootsketch.html',
        controller: 'BootsketchCtrl',
        controllerAs: 'bootsketch'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


