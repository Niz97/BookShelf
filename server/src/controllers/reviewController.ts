import { Request, Response } from "express";
import Review from "../models/Review";

// Create
export async function createdReview(req: Request, res: Response) {
    
  // TODO::Validation
  console.log(req.body.name, req.body.genre, req.body.author);
  const review = new Review({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });

  const createdReview = await review.save();

  res.json(createdReview);
}

// Get all reviews
export async function getReviews(req: Request, res: Response) {

  const reviews = await Review.find();

  res.json(reviews);
}
