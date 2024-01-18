import React from "react";
import Spotify from "../../util/Spotify";

function SpotifyWebPlayback(){
  window.onSpotifyWebPlaybackSDKReady = () => {
  const token = "59387dfb638d4bddad54a24e035cc754";
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); },
    volume: 0.5
  });

  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  player.addListener('initialization_error', ({ message }) => {
    console.error(message);
});

player.addListener('authentication_error', ({ message }) => {
    console.error(message);
});

player.addListener('account_error', ({ message }) => {
    console.error(message);
});

player.connect();


document.getElementById('togglePlay').onclick = function() {
    player.togglePlay();
  };

return (
    <div>
        <script src="https://sdk.scdn.co/spotify-player.js"> 
        <button id="togglePlay">Toggle Play</button></script> 
       
    </div>

)
};
};


  export default SpotifyWebPlayback;