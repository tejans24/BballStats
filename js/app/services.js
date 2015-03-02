var app = angular.module('app');

app.factory('scoreService', ['$http', function($http){
	var nbaUrl = 'http://stats.nba.com/stats/scoreboardV2?DayOffset=0&LeagueID=00&gameDate=03%2F02%2F2015';

	return{
		get: function(){
			$http.get(

				);
		}
	}

}]);