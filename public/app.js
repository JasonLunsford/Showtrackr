angular.module('MyShowTrackr', [
	'ui.router',
	'ngCookies',
	'ngResource',
	'ngMessages',
	'mgcrea.ngStrap'
])
.config(['$urlRouterProvider', '$locationProvider', '$stateProvider', function($urlRouterProvider, $locationProvider, $stateProvider) {
	$urlRouterProvider
		.rule(function ($injector, $location) {
			var path = $location.path();
			var normalized = path.toLowerCase();

			if (path != normalized) {
				$location.replace().path(normalized);
			}
		})
		.otherwise("/home");

	$stateProvider
		.state('/home', {
			url: "/home",
			templateUrl: "views/home.html",
			controller: 'MainCtrl'
		})

		.state('shows', {
			url: "/shows/{id}",
			templateUrl: "views/detail.html",
			controller: 'DetailCtrl'
		})

		.state('login', {
			url: "/login",
			templateUrl: "views/login.html",
			controller: 'LoginCtrl'
		})

		.state('signup', {
			url: "/signup",
			templateUrl: "views/signup.html",
			controller: 'SignupCtrl'
		})

		.state('add', {
			url: "/add",
			templateUrl: "views/add.html",
			controller: 'AddCtrl'
		});

	$locationProvider.html5Mode(true);
}]);