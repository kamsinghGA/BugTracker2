import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  //fetch accepts an "options" object as the 2nd argument
  // used to include a data payload, set headers, specify the method, etc
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Adding authorization header
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  console.log(res.body);
  if (res.ok) return res.json();
  throw new Error("Failed Request");
}