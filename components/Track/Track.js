// Track.js
import React, { useCallback } from 'react';
import './Track.css';

const Track = (props) => {
    const addTrack = useCallback(
      () => {
        props.onAdd(props.track);
      },
      [props.onAdd, props.track]
    );
  
    const removeTrack = useCallback(
      () => {
        props.onRemove(props.track);
      },
      [props.onRemove, props.track]
    );
  
    const renderAction = () => {
      if (props.isRemoval && props.playlistTrackIds.includes(props.track.id)) {
        return (
          <button className="Track-action" onClick={removeTrack}>
            No thanks!
          </button>
        );
      }
      return (
        <button className="Track-action" onClick={addTrack}>
          Want it!
        </button>
      );
    };
  
    return (
      <div className="Track">
        <div className="Track-information">
          <p>{props.track.name}</p>
          <p>{props.track.artist} - {props.track.album}</p>
        </div>
        {renderAction()}
      </div>
    );
  };
  
  

export default Track;
