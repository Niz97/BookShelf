import React, { useEffect, useState } from 'react'
import './App.css'
import Book from './components/Book'
import { createReview } from './api/createReview';
import { getReviews } from './api/getReviews';

function App() {
  const [newReview, setNewReview] = useState({
    name: '',
    genre: '',
    author: ''
  });
  const [reviews, setReviews] = useState<any[]>([]);
  
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('submitting...');
    createReview(newReview.name, newReview.genre, newReview.author);
  }

  const handleChange = (e:React.FormEvent) => {
    setNewReview((prevState) => ({
      ...prevState,
      [(e.target as HTMLTextAreaElement).name]: (e.target as HTMLTextAreaElement).value
    }))
  }

  useEffect(() => {
    async function fetchReviews() {
      const reviews = await getReviews();
      setReviews(reviews);
    }
    fetchReviews();
  }, [])
  return (
    <div className="App">
      <div className="shelf-container">
        {reviews.map((review) => (
          <Book 
           // TODO::Use redux-toolkit to gen unique keys
            key={`${review.name}-key-${(new Date().valueOf() - Math.random()*(1e+12))}`}
            author={review.author}
            genre={review.genre}
            name={review.name}
          />
        ))}
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              id="new-Review-name" 
              name="name"
              type="text"
              value={newReview.name}
              onChange={handleChange}
            />
            <label htmlFor="genre">Genre</label>
            <input 
              id="new-Review-genre" 
              name="genre"
              type="text"
              value={newReview.genre}
              onChange={handleChange}
            />
            <label htmlFor="name">Author</label>
            <input 
              id="new-Review-author" 
              name="author"
              type="text"
              value={newReview.author}
              onChange={handleChange}
            />
            <button type="submit">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

