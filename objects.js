var playlist = {
  Toto : "Africa",
}

function updatePlaylist(playlist, artist, song) {
  //Object.assign( {}, playlist, {[artist]:song} )
  return playlist[artist] = song
}
