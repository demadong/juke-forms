app.controller('newPlaylist', function($scope, playlistFactory) {
	$scope.submit = function() {
		var newPlaylist = {
			name: $scope.name
		};
		playlistFactory.create(newPlaylist).then(function(playlist) {
			$scope.reset();
		});
	};

	$scope.reset = function() {
		$scope.name = '';
	}
})