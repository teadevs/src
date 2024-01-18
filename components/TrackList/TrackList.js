import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";
import PlayButton from "../PlayTrack/PlayButton";
//import SpotifyWebPlayback from "../SpotifyWebPlayback/SpotifyWebPlayback";

const TrackList = (props) => {
  return (
    <div className="TrackList">
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
            onClick={props.PlayButton}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
