angular.module('MyShowTrackr')
	.factory('Show', ['$resource', function($resource) {
		return $resource('/api/shows/:_id', {}, {'query': { method: 'GET' }});
	}]);