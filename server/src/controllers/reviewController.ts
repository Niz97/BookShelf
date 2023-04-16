import { Request, Response } from "express";
import Review from "../models/Review";

// Create
export async function createdReview(req: Request, res: Response) {
    
  // TODO::Validation
  // TODO::Make this more DRY lol
  if (!req.body.name || !req.body.author || !req.body.genre) {
    res.status(400).json('Please fill out all fields') // TODO::Whats the correct status code to use when returning validation errors?
  }
  const review = new Review({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });

  const createdReview = await review.save();

  res.status(201).json(createdReview);
}

// Get all reviews
export async function getReviews(req: Request, res: Response) {

  const reviews = await Review.find();

  res.json(reviews);
}
