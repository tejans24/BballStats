var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
  	$routeProvider.
    when('/login', {
      templateUrl: '/partials/login',
      controller: 'LoginCtrl'
    })
    .otherwise({
      templateUrl: '../partials/scores.html',
      controller: 'ScoreCtrl'
    });
}]);