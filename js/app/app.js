var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
  	$routeProvider.
    when('/login', {
      templateUrl: '/partials/login',
      controller: 'LoginCtrl'
    }).
    when('/standings', {
      templateUrl: '../partials/standings.html',
      controller: 'StandingCtrl'
    })
    .otherwise({
      templateUrl: '../partials/scores.html',
      controller: 'ScoreCtrl'
    });
}]);