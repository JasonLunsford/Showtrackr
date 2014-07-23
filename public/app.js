angular.module('MyShowTrackr', [
	//'ngRoute',
	'ui-router'
	'ngCookies',
	'ngResource',
	'ngMessages',
	'mgcrea.ngStrap'
])
.config(['$urlRouterProvider', '$locationProvider', '$stateProvider', function($urlRouterProvider, $locationProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/");
	
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.when('/shows/:id', {
			templateUrl: 'views/detail.html',
			controller: 'DetailCtrl'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl'
		})
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'SignupCtrl'
		})
		.when('/add', {
			templateUrl: 'views/add.html',
			controller: 'AddCtrl'
		})
			.otherwise({
			redirectTo: '/'
		});

	$stateProvider
		.state('/', {
			url: "/",
			templateUrl: "views/home.html",
			controller: 'MainCtrl'
		})

		.state('state1', {
			url: "/state1",
			templateUrl: "partials/state1.html"
		})

		.state('state1', {
			url: "/state1",
			templateUrl: "partials/state1.html"
		})

		.state('state1', {
			url: "/state1",
			templateUrl: "partials/state1.html"
		})

		.state('state1', {
			url: "/state1",
			templateUrl: "partials/state1.html"
		});

	$locationProvider.html5Mode(true);
}]);