import React, { useState } from 'react';
import Spotify from '../../util/Spotify';
import TrackList from '../TrackList/TrackList';
import SpotifyPlayer from 'react-player';
import Track from '../Track/Track';
import './PlayButton.css';

const track = {TrackList};

const PlayButton = ({ trackId, playTrack }) => {
  const player = Spotify.getPlayer();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    playTrack(trackId);
  
  };
  return (
    <div>
    <button onClick={handlePlay} id="togglePlay">Play Track</button>
    {isPlaying && <Spotify track={track} playing />}
  </div>
  );
};

export default PlayButton;

  