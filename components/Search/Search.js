// Search.js
import React, { useState, useCallback } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';
import SearchButton from '../SearchButton/SearchButton';
//import './Search.css';

const Search = () => {
  const [term, setTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(async () => {
    try {
      const results = await Spotify.search(term);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  }, [term]);

  return (
    <div className="Search">
    <SearchBar term={term} onTermChange={handleTermChange} onSearch={search} />
    <SearchButton onSearch={search} />
    <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default Search;
