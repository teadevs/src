import React, { useState, useCallback } from "react";
import "./Playlist.css";
// import Spotify from './util/Spotify';
import TrackList from '../TrackList/TrackList';


const Playlist = (props) => {

  const [playlistTrackIds, setPlaylistTrackIds] = useState([]);
  
  const updatePlaylistTrackIds = (newTrackIds) => {
    setPlaylistTrackIds(newTrackIds);
  };

  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );


 

  return (
    <div className="Playlist">
      <input id="nameoflist" onChange={handleNameChange} defaultValue={"Playlist Name"} />
      <TrackList
        tracks={props.playlistTracks}
        playlistTrackIds={playlistTrackIds}
        updatePlaylistTrackIds={updatePlaylistTrackIds}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SPOTIFY, make me a Playlist!!
      </button>
    </div>
  );
};

export default Playlist;
