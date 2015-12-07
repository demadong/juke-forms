app.config(function($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/new_playlist',
		templateUrl: '/templates/playlistForm.html',
		controller: 'newPlaylist'
	})
})