import React, { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Book from './components/Book'
import { createReview } from './api/createReview';
import { getReviews } from './api/getReviews';
import styled from 'styled-components';

const StyledShelf = styled.div`
  display: flex;
  border: solid 1px blue;
  padding: 1rem;
`

function App() {
  const [newReview, setNewReview] = useState({
    name: '',
    genre: '',
    author: ''
  });
  const [reviews, setReviews] = useState<any[]>([]);
    
  async function handleSubmit (e:React.FormEvent) {
    e.preventDefault();
    console.log('submitting...');
    const [success, message] = await createReview(newReview.name, newReview.genre, newReview.author);
    console.log(success, message)
    success ? toast.success(message) : toast.error(message)
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
      <ToastContainer />
      <StyledShelf className="shelf-container">
        {reviews.map((review) => (
          <Book 
           // TODO::Use redux-toolkit to gen unique keys
            key={`${review.name}-key-${(new Date().valueOf() - Math.random()*(1e+12))}`}
            author={review.author}
            genre={review.genre}
            name={review.name}
          />
        ))}
      </StyledShelf>
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

