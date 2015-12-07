app.factory('playlistFactory', function($http) {
	return {
		create: function(newPlaylist) {
			return $http({
				method: 'POST', 
				url: '/api/playlists/',
				data: newPlaylist
			}).then(res => res.data);
		},
		getAll: function() {
			return $http.get('/api/playlists/').then(res => res.data);
		}
	}
})