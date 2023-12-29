import React from 'react';
import './SearchResults.css';
import '../PreviewTrack/PreviewTrack.css';
//import PreviewTrack from '../PreviewTrack/PreviewTrack';
// import Spotify from './util/Spotify';
import TrackList from '../TrackList/TrackList';

const SearchResults = (props) => {
    return (
        <div className="container">
        <div className="SearchResults">
          <h3>Here's some tracks!</h3>
          <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
        </div>
    );
  };
  

export default SearchResults;


