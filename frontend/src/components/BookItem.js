import React, { useState } from 'react';
import BookDetails from './BookDetails';

const BookItem = ({ book }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="book-item">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>
      {showDetails && <BookDetails book={book} />}
    </div>
  );
};

export default BookItem;
