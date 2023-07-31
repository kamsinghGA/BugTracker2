import * as bugsAPI from "./bugs-api";

export async function createBug(text, user) {
  let newBug = { text: text, user: user };
  return bugsAPI.create(newBug);
}

export async function getBugs(user) {
  let bugs = await bugsAPI.getBugs(user);
  return bugs;
}