//function DestinationsCtrl($scope, Airport){
function DestinationsCtrl($scope, $http){

	// Used to bootstrap highlight the link
	$scope.setActive('destinations');
	
	// Used in destinations.html Template
	$scope.sideBarURL     = "partials/airport.html";

	// Not currently used for editing airport info in form
	$scope.formURL        = "partials/form.html";
	$scope.editing        = null;
	$scope.editAirport    = function(code){
		$scope.editing        = $scope.airports[code];
	};
	
	// Used in airport.html Template
	$scope.currentAirport = null;
	$scope.setAirport     = function(code){
		$scope.currentAirport = $scope.airports[code];
	};
	
	//$scope.airports = Airport.query();
}