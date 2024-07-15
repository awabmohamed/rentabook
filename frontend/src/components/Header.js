import React, { useState } from 'react';
import axios from '../axiosConfig';

const Header = ({ setBooks }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => setBooks(response.data.items.map(item => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
        description: item.volumeInfo.description,
        available: true,
        cover: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'
      }))))
      .catch(error => console.error('Error fetching books:', error));
  };

  return (
    <header>
      <h1>Rent-A-Book</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a book..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;
