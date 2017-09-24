var playlist = {
  Toto : "Africa",
}

function updatePlaylist(playlist, artist, song) {
  //Object.assign( {}, playlist, {[artist]:song} )
  playlist[artist] = song
  return playlist
}
