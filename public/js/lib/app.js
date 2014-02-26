// There must be 2 parameters passed in or error,
// so pass in an empty array if nothing else.
angular.module('airline', ['ngRoute']).config(airlineRouter);
//angular.module('airline', ['ngRoute', 'airlineServices']).config(airlineRouter);

	
function airlineRouter($routeProvider){
	$routeProvider
		// I add a controller so the buttons will be activated upon
		// openning the first page
		.when("/", {
								templateUrl: "partials/destinations.html",
		            //controller: function($scope){ $scope.setActive('destinations'); }
								controller: 'DestinationsCtrl'
		           }
					)
		.when("/airports/:airportCode", {templateUrl: "partials/airport.html",
																		controller: "AirportCtrl"})
		.when("/airports/:airport1Code/:airport2Code",
		 									{templateUrl: "partials/two-airports.html"})
		.when("/flights", {template : "<h3>Flights</h3> {{airports | json}}",
												controller: 'FlightsCtrl'})
		.when("/reservations", {template : "<h3>Reservations</h3> {{airports | json}}",
														controller: 'ReservationsCtrl'})
		;
}




