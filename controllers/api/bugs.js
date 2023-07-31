const Bug = require("../../models/bug");

module.exports = {
  findBugByUser,
  create,
};

async function create(req, res) {
  console.log(req.body);
  let newBug = await Bug.create(req.body);
  res.json(newBug);
}

async function findBugByUser(req, res) {
  let bugs = await Bug.find(req.body.user);
  res.json(bugs);
}