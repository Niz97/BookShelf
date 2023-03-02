import mongoose, { Schema } from "mongoose";

interface Review {
  name: string;
  author: string;
  genre: string;
  // category:string
  // is_series: boolean;
}

const ReviewSchema = new Schema<Review>({
  name: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  // category: { type: String, required: true },
  // is_series: { type: Boolean, required: true },
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

export default ReviewModel;