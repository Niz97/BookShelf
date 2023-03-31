const express = require('express')
const reviews = express.Router()
import {
  createdReview,
} from "../controllers/reviewController";


reviews.route('/').post(createdReview)

export default reviews;