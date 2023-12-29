import React, { useState } from 'react';

const SearchButton = ({ playlistData }) => {
  const [isSaving, setIsSaving] = useState(false);
  const spotifyUrl = "https://api.spotify.com/v1/search?type=track";


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
