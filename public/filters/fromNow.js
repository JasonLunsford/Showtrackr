angular.module('MyShowTrackr').
  filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
});