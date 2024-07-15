import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';  
import BookItem from './BookItem';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('books/')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
