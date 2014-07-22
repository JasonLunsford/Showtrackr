angular.module('MyShowTrackr', [
	'ui.router',
	'ngCookies',
	'ngResources',
	'ngMessages',
	'mgcrea.ngStrap'
])
.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
	
}]);