import React, { useCallback } from "react";
//import TrackList from "../TrackList/TrackList";
import "./Track.css";
//import Playlist from "../Playlist/Playlist";
import PlayTrack from "../PlayTrack/PlayTrack";
import PlayButton from "../PlayTrack/PlayButton";



const Track = (props) => {
 

  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          No Thanks
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        Love It
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
        <PlayButton />
        {renderAction()}
      </div>
    </div>
  );
};

export default Track;