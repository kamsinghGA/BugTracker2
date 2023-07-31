import sendRequest from "./send-requests";

const BASE_URL = "/api/bugs";

export function create(newBug) {
  return sendRequest(BASE_URL, "POST", newBug);
}

export function getBugs(user) {
  return sendRequest(`${BASE_URL}/get-user-bugs`, "GET", user);
}