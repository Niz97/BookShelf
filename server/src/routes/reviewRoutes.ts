const express = require('express')
const reviews = express.Router()
import {
  createdReview,
  getReviews,
} from "../controllers/reviewController";


reviews.route('/').get(getReviews).post(createdReview);

export default reviews;