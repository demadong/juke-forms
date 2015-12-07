app.factory('playlistFactory', function($http) {

	var cachedPlaylists = [];

	return {

		addSong: function( playlist, song ) {
			return $http.post('/api/playlists/' + playlist._id + '/songs', { song: song })
				.then( res => res.data )
				.then( song => {
					song.audioUrl = "/api/songs/" + song._id + ".audio";
					return song;
				});
		},

		create: function(newPlaylist) {
			return $http({
				method: 'POST', 
				url: '/api/playlists/',
				data: newPlaylist
			}).then(res => {
				var playlist = res.data;
				cachedPlaylists.push( res.data );
				return playlist;
			});
		},

		fetchAll: function() {
			return $http.get('/api/playlists/').then(res => {
				angular.copy( res.data, cachedPlaylists );

				cachedPlaylists.forEach( function( playlist ) {
					playlist.songs.forEach( function( song ) {
						song.audioUrl = "/api/songs/" + song + ".audio";
					});
				});

				return cachedPlaylists;
			});
		},

		fetchById: function( playlistId ) {
			return $http.get('/api/playlists/' + playlistId).then( res => res.data );
		}

	}
})