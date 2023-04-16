import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Review from "./models/Review";
import reviews from './routes/reviewRoutes'

config()

const app = express();

app.use(cors({
  origin: "*",
}));
app.use(express.json());

const connect_string = process.env.MONGO_URI;
const PORT = 5000;

mongoose.connect(
  connect_string!
  ).then(() => {
    console.log(`Listening on port ${PORT}`);
});

app.use('/reviews', reviews);


app.listen(5000);