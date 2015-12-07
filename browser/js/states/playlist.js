app.config( function( $stateProvider ) {

  $stateProvider.state( 'playlist', {
    url: '/playlist/:playlistId',
    templateUrl: '/templates/playlist.html',
    controller: 'playlistCtrl'
  });

});