app.controller('playlistsCtrl', function($scope, playlistFactory) {
	playlistFactory.fetchAll().then(function(playlists) {
		$scope.playlists = playlists;
	})

}).controller('playlistCtrl', function( $scope, $stateParams, playlistFactory, SongFactory, PlayerFactory ) {

  playlistFactory.fetchById( $stateParams.playlistId ).then( function( playlist ) {
    $scope.playlist = playlist;
  });

  SongFactory.fetchAll().then( function( songs ) {
    $scope.all_songs = songs;
  })

  $scope.isCurrent = function( song ) {
    var current = PlayerFactory.getCurrentSong();
    return current && current._id === song._id;
  };

  $scope.start = function( song ) {
    PlayerFactory.start( song, $scope.playlist.songs );
  }

  $scope.submit = function() {
    var song = $scope.songToSubmit;
    playlistFactory.addSong( $scope.playlist, song ).then( function( song ) {
      $scope.playlist.songs.push( song );
      $scope.resetAddSong();
    });
  }

  $scope.resetAddSong = function() {
    $scope.songToSubmit = null;
  }

});