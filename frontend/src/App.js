import React, { useState } from 'react';
import Header from './components/Header';
import PopularBooks from './components/PopularBooks';
import BookDetails from './components/BookDetails';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <Header setBooks={setBooks} />
      <div className="search-results">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.cover} alt={book.title} />
            <BookDetails book={book} />
          </div>
        ))}
      </div>
      <PopularBooks />
    </div>
  );
}

export default App;
