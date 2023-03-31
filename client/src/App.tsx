import React, { useState } from 'react'
import './App.css'
import Book from './components/Book'
import { createReview } from './api/createReview';

function App() {
  const [book, setBook] = useState({
    name: '',
    genre: '',
    author: ''
  });
  
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('submitting...');
    createReview('test post request');
  }

  const handleChange = (e:React.FormEvent) => {
    setBook((prevState) => ({
      ...prevState,
      [(e.target as HTMLTextAreaElement).name]: (e.target as HTMLTextAreaElement).value
    }))
  }
  return (
    <div className="App">
      <div className="shelf-container">
        <Book 
          author="Some author"
          genre="Sci-fi"
          name="Stormbreaker"
        />
        <Book 
          author="Some author"
          genre="Sci-fi"
          name="Stormbreaker"
        />
        <Book 
          author="Some author"
          genre="Sci-fi"
          name="Stormbreaker"
        />
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              id="book-name" 
              name="name"
              type="text"
              value={book.name}
              onChange={handleChange}
            />
            <label htmlFor="genre">Genre</label>
            <input 
              id="book-genre" 
              name="genre"
              type="text"
              value={book.genre}
              onChange={handleChange}
            />
            <label htmlFor="name">Author</label>
            <input 
              id="book-author" 
              name="author"
              type="text"
              value={book.author}
              onChange={handleChange}
            />
            <button type="submit">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

