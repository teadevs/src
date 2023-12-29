import React from 'react';
import "./TrackList.css";
//import PreviewTrack from '../PreviewTrack/PreviewTrack';
//import "../PreviewTrack/PreviewTrack.css";
import Track from '../Track/Track'; 

const TrackList = ({ tracks, onAdd, onRemove, isRemoval, playlistTrackIds, updatePlaylistTrackIds }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <div key={track.id} className="TrackListItem">
          <Track
            track={track}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
            playlistTrackIds={playlistTrackIds}
            updatePlaylistTrackIds = {updatePlaylistTrackIds}
          />  
        </div>
      ))}
    </div>
    
  );
  
};

export default TrackList;
