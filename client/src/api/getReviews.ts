import { API_URL } from "./config";
export async function getReviews() {
  const response = await fetch(`${API_URL}/reviews`)
  return response.json();
}