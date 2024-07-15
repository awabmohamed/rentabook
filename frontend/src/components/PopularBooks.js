import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';

const PopularBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10')
      .then(response => setBooks(response.data.items.map(item => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
        description: item.volumeInfo.description,
        available: true,
        cover: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'
      }))))
      .catch(error => console.error('Error fetching popular books:', error));
  }, []);

  return (
    <div className="popular-books">
      <h2>Popular Books</h2>
      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.cover} alt={book.title} />
            <BookDetails book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
