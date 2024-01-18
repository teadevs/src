import React, { useState, useCallback, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Spotify from './util/Spotify';
import Track from "./components/Track/Track";
import PlayButton from "./components/PlayTrack/PlayButton";
import Playlist from "./components/Playlist/Playlist";
import { clientId} from './config';
import "./App.css";



  const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);    
    const [isLoading, setIsLoading] = useState(false);
    const trackId = {Track};
    const [player, setPlayer] = useState(false);
  
  const search = useCallback((term) => {
      Spotify.search(term).then(setSearchResults);
    }, []);

  const PlayTrackAPI = async (trackId) => {
  useEffect(()=>{
    const { player } = Spotify.initializeSpotifyPlayer(accessToken);
    const accessToken = {clientId};

    setPlayer(player);

    return()=>{
      player.disconnect();
    };
  }, []); 

  const handlePlay = async (trackId) => {
    setIsLoading(true);
  
    try { 
      setTimeout(async () => {
        setIsPlaying(true);
        setIsLoading(false);
  
        await Spotify.play(trackId);
      }, 2500);
    } catch (error) {
      console.error('Error while handling play:', error);
      setIsLoading(false);
    }
  };
};
    

    const addTrack = useCallback(
      (track) => {
        if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
          return;
  
        setPlaylistTracks((prevTracks) => [...prevTracks, track]);
      },
      [playlistTracks]
    );
  
    const removeTrack = useCallback((track) => {
      setPlaylistTracks((prevTracks) =>
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
    }, []);
  
    const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name);
    }, []);
  
    const savePlaylist = useCallback(() => {
      const trackUris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      });
    }, [playlistName, playlistTracks]);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing 
      </h1>
      <div className="App">
      <SearchBar onSearch={search} />
       <div className="App-playlist">
       <SearchResults searchResults={searchResults} onAdd={addTrack} onClick={() => PlayButton(trackId)} />
        <PlayButton playTrack={PlayTrackAPI} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  </div>
);
  };




export default App;
