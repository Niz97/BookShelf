import { API_URL } from "./config";
export async function createReview(name:string) {
  const response = await fetch(`${API_URL}/reviews`, {
    method:'POST',
    body:JSON.stringify({
      name:name
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}