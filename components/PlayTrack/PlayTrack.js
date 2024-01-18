import React, { useState, useEffect } from 'react';
import Track from '../Track/Track';
import Spotify from '../../util/Spotify';
import App from '../../App';
import TrackList from "../TrackList/TrackList";
import "./PlayTrack.css";
import PlayButton from "./PlayTrack";


const PlayTrack = () => {
  const [trackData, setTrackData] = useState(null);


  useEffect(() => {
    Spotify.search().then(data => setTrackData(data));
  }, []);

  return (
    <div>
      <PlayButton />
    </div>
  );
};

export default PlayTrack;