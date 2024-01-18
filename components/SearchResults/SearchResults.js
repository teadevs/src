import React from 'react';
import TrackList from '../TrackList/TrackList';
import PlayButton from '../PlayTrack/PlayButton';
import './SearchResults.css';


const SearchResults = ({ props }) => {
  return (
    <div className="container">
      <div className="SearchResults">
        <h3>Here's some tracks!</h3>
        <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        {props.searchResults.map((track) => (
          <PlayButton key={track.id} trackId={track.id} playTrack={props.onClick} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
