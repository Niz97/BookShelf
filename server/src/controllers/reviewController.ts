import { Request, Response } from "express";
import Review from "../models/Review";

// Create
export async function createdReview(req: Request, res: Response) {
    
  // TODO::Validation
  // TODO::Make this more DRY lol
  if (!req.body.name || !req.body.author || !req.body.genre) {
    return res.status(400).json({ 
      message: 'Please fill out all fields'
    }) // TODO::Whats the correct status code to use when returning validation errors?
  }
  const review = new Review({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });

  const createdReview = await review.save();

  res.status(201).json({
    ...createdReview,
    message:`Saved your review: ${req.body.name}`
  })
}

// Get all reviews
export async function getReviews(req: Request, res: Response) {

  const reviews = await Review.find();

  res.json(reviews);
}
