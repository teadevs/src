import React, { useState } from 'react';

const SavePlaylistButton = ({ playlistData }) => {
  const [isSaving, setIsSaving] = useState(false);
  const spotifyUrl = "https://api.spotify.com/v1/search?type=track";
  const spotifyApi = "https://api.spotify.com/59387dfb638d4bddad54a24e035cc754";

  const savePlaylist = async () => {
    try {
      setIsSaving(true);
      await spotifyApi.savePlaylist(playlistData);
      console.log('Playlist saved successfully!');
    } catch (error) {
      console.error('Error saving playlist:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <button onClick={savePlaylist} disabled={isSaving}>
      {isSaving ? 'Saving...' : 'Save Playlist'}
    </button>
  );
};

export default SavePlaylistButton;
