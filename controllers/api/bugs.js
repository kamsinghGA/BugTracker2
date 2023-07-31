const Bug = require('../../models/bug');
const mongoose = require('mongoose');


//get bugs
const getBugs = async (req, res) => {
  const bugs = await Bug.find({}).sort({createdAt: -1})

  res.status(200).json(bugs)
}

//get single bug
const getBug = async (req, res) => {
  const { id } = req.params
  const bug = await Bug.findById(id)

  if (!bug) {
    return res.status(404).json({error: 'No bug'})
  }
  res.status(200).json(bug)
}

//create bug
const createBug = async (req, res) => {
  const {text} = req.body
  // add doc to db
  try {
    const bug = await Bug.create(text)
    res.status(200).json(bug)  
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete bug
const deleteBug = async (req, res) => {
  const { id } = req. params
  const bug = await Bug.findOneAndDelete({_id: id})

  if (!bug) {
    return res.status(404).json({error: 'No bug'})
  }

  res.status(200).json(bug)
}

//update bug
const updateBug = async (req, res) => {
  const bug = await Bug.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!bug) {
    return res.status(404).json({error: 'No bug'})
  }

  res.status(200).json(bug)
}

module.exports = {
  createBug,
  getBugs,
  getBug,
  deleteBug,
  updateBug
}
