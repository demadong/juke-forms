app.config(function($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlist/new',
		templateUrl: '/templates/playlist.html',
		controller: 'newPlaylist'
	})
})