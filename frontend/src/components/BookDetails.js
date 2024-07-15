import React, { useState } from 'react';
import axios from '../axiosConfig';

const BookDetails = ({ book }) => {
  const [rented, setRented] = useState(false);
  const [userName, setUserName] = useState('');

  const handleRent = () => {
    if (!userName) {
      alert("Please enter your name.");
      return;
    }

    axios.post('rentals/', {
      user_name: userName,
      book: book.id,
    })
    .then(response => {
      setRented(true);
      console.log("Rental response:", response.data);
    })
    .catch(error => {
      console.error('Error renting book:', error.response ? error.response.data : error.message);
    });
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>{book.available ? 'Available' : 'Not Available'}</p>
      {book.available && !rented && (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <button onClick={handleRent}>Rent Book</button>
        </div>
      )}
      {rented && <p>Book rented successfully!</p>}
    </div>
  );
};

export default BookDetails;
