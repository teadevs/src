import React, { useCallback } from "react";
import "./Playlist.css";
// import Spotify from './util/Spotify';
import SavePlaylistButton from "../savePlaylistButton/SavePlaylistButton";
import TrackList from '../TrackList/TrackList';
//import PlayTrack from "../PlayTrack/PlayTrack";


const Playlist = (props) => {

  const handleNameChange = useCallback(
  (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );


  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
              />
        <Playlist />
      <button id={SavePlaylistButton} className="Playlist-save" onClick={props.onSave}>
        SPOTIFY, make me a Playlist!!
      </button>
    </div>
  );
};

export default Playlist;
