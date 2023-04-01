import { API_URL } from "./config";
export async function createReview(name:string, genre:string, author:string) {
  const response = await fetch(`${API_URL}/reviews`, {
    method:'POST',
    body:JSON.stringify({
      name:name,
      genre:genre,
      author:author,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}