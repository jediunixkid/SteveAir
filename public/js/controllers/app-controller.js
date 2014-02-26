function AppCtrl($scope, $http){
	
	// Temporarily set up data until we tie in
	// a database
	// $scope.airports = {
	// 		"PDX" : {
	// 			"code" : "PDX",
	// 			"name" : "Portland International Airport",
	// 			"city" : "Portland",
	// 			"destinations" : [
	// 				"MCI",
	// 				"STL"
	// 			]
	// 		},
	// 		"STL" : {
	// 			"code" : "STL",
	// 			"name" : "Lambert-St. Louis International Airport",
	// 			"city" : "St. Louis",
	// 			"destinations" : [
	// 				"PDX",
	// 				"PHX"
	// 			]
	// 		},
	// 		"MCI" : {
	// 			"code" : "MCI",
	// 			"name" : "Kansas City International Airport",
	// 			"city" : "Kansas City",
	// 			"destinations" : [
	// 				"STL",
	// 				"PHX"
	// 			]
	// 		},
	// 		"PHX" : {
	// 			"code" : "PHX",
	// 			"name" : "Phoenix International Airport",
	// 			"city" : "Phoenix",
	// 			"destinations" : [
	// 				"PDX",
	// 				"MCI"
	// 			]
	// 		}
	// 	};
	$scope.airports = [];
	$scope.findAll = function () {
		$http.get('/airports').success(function (airports, status, headers, config) {
			$scope.airports = airports;
		});
	};
	
	$scope.findAll();
	
	// db.airports.find(function(err, users) {
	//   if( err || !airports) console.log("FAILURE");
	//   else airports.forEach( function(airport) {
	//     console.log(airport.code);
	//   } );
	// });
	
	// Used in two-airports.html Template
	$scope.airportTemplate = "partials/airport.html";
	
	// Used to highlight the bootsrap buttons
	$scope.setActive = function(type){		
		$scope.destinationsActive = '';
		$scope.flightsActive      = '';
		$scope.reservationsActive = '';
		$scope[type + 'Active']   = 'active';
	};
	
}


