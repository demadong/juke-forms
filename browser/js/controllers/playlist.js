app.controller('playlistCtrl', function($scope, playlistFactory) {
	playlistFactory.getAll().then(function(playlists) {
		$scope.playlists = playlists;
	})

})