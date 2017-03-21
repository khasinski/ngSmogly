(function(){
  'use strict';

  angular.module('ngSmogly', [
    'ngRoute',
    'ngMap'
  ])

  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/map'});
  }])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/map', {
      templateUrl: 'map/map.html',
      controller: 'MapController',
      controllerAs: 'mc'
    });
  }]);
})();
