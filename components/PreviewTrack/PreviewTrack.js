import React, { useEffect, useState } from 'react';
import './PreviewTrack.css';
import Spotify from '../../util/Spotify';

const PreviewTrack = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('preview');

    if (!audio) {
      console.error("Audio element with ID 'preview' not found.");
      return;
    }

    const fetchPreviewUrl = async () => {
        try {
          const previewData = await Spotify.preview(track.id);
          console.log('Preview Data:', previewData);
      
          if (previewData.length > 0) {
            const previewUrl = previewData[0].preview_url;
            handlePreview(previewUrl);
          } else {
            console.error(`No preview URL found for track: ${track.name}`);
          }
        } catch (error) {
          console.error('Error fetching preview:', error);
        }
      };
      

    if (isPlaying) {
      fetchPreviewUrl();
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying, track]);

  const handlePreview = (previewUrl) => {
    const audio = document.getElementById('preview');

    if (isPlaying) {
      audio.src = previewUrl;
      audio.play();
    } else {
      audio.pause();
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default PreviewTrack;
