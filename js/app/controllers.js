var app = angular.module('app');

app.controller('ScoreCtrl', ['$scope', '$http', 'scoreFactory', function($scope, $http, scoreFactory){
	var statsUrl = 'http://stats.nba.com/stats/scoreboardV2?DayOffset=0&LeagueID=00&gameDate=03%2F02%2F2015';

	$scope.date = new Date();
	$http.get(statsUrl).
	success(function(data, status, headers, config) {
		$scope.headers = data.resultSets[0].rowSet;
		$scope.scores = data.resultSets[1].rowSet;
		$scope.series = data.resultSets[2].rowSet;
	}).
	error(function(data, status, headers, config) {
		$scope.scores = "error: " + status;
	});
}]);

app.controller('StandingCtrl', ['$scope', '$http', function($scope, $http){
	var statsUrl = 'http://stats.nba.com/stats/scoreboardV2?DayOffset=0&LeagueID=00&gameDate=03%2F02%2F2015';

	$scope.date = new Date();
	$http.get(statsUrl).
	success(function(data, status, headers, config) {
		$scope.eastStandings = data.resultSets[4].rowSet;
		$scope.westStandings = data.resultSets[5].rowSet;
	}).
	error(function(data, status, headers, config) {
		$scope.standings = "error: " + status;
	});
}]);