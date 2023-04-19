import React, { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createReview } from './api/createReview';
import { getReviews } from './api/getReviews';
import BookShelf from './components/BookShelf';


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
    // TODO:: Would be much nicer if the logic below lived in a hook
    const [success, response] = await createReview(newReview.name, newReview.genre, newReview.author);
    success ? toast.success(response.message) : toast.error(response.message)
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
      <BookShelf reviews={reviews}/>
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

