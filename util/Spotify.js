 //import TrackList from "../components/TrackList/TrackList";
 //import Playlist from "../components/Playlist/Playlist";
 //import Track from "../components/Track/Track";


const clientId = '59387dfb638d4bddad54a24e035cc754';
const redirectUri = 'http://localhost:3000/';


let accessToken;
let playlistTrackIds;


const Spotify = {
  async search(term) {
    const accessToken = await this.getAccessToken();

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonResponse) => {
        // Your existing logic
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },

    
      async this.getAccessToken() {
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }, 

      }
  

        
      const filteredTracks = jsonResponse.tracks.items.filter(track => !playlistTrackIds.includes(track.id));



      return filteredTracks.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
  

  savePlaylist (name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  },

 
  
};



export default Spotify;