import React, { useState, useEffect } from 'react';
import Book from './Book'; // Make sure to adjust the path based on your actual file structure

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Make API call to get all books when the component mounts
    fetch(`${process.env.REACT_APP_JSON_SERVER_URL}/books`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredBooks = selectedCategory === 'all'
    ? books
    : books.filter((book) => book.category === selectedCategory);

  return (
    <>
      <div className="filter-options">
        <label>
          Category:
          <select
            className="filter-by-category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All Categories</option>
            <option value="Classic">Classic</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Romance">Romance</option>
            <option value="Coming of age">Coming of Age</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Political satire">Political Satire</option>
            <option value="Mystery">Mystery</option>
            <option value="Epic poem">Epic Poem</option>
          </select>
          </label>
        <label>
          Search:
          <input />
        </label>
      </div>
      <div className="book-list">
        {loading ? (
          <h1 className="loading-text">Loading...</h1>
        ) : (
          filteredBooks.map((book) => (
            <Book
              key={book.id} // Make sure each book has a unique identifier (adjust based on your actual data structure)
              title={book.title}
              author={book.author}
              ISBN={book.isbn}
              category={book.category}
              publicationDate={book.publication_date}
            />
          ))
        )}
      </div>
    </>
  );
};

export default BookList;