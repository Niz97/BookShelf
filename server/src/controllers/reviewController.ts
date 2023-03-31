import { Request, Response } from "express";
import Tracker from "../models/Review";

// Create
export async function createdReview(req: Request, res: Response) {
    
  const review = new Tracker({
    name: 'test lol',
    author: 'test author lol',
    genre: 'test genre lol',
  });

  const createdReview = await review.save();

  res.json(createdReview);

}
