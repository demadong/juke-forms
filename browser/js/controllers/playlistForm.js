app.controller('newPlaylist', function($scope, $state, playlistFactory) {
	$scope.submit = function() {
		var newPlaylist = {
			name: $scope.name
		};

		playlistFactory.create(newPlaylist).then(function(playlist) {
			$state.go( 'playlist', { playlistId: playlist._id } )
		});
	};

	$scope.reset = function() {
		$scope.name = '';
	}
})