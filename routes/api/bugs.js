const express = require('express');
const router = express.Router();
const {
  createBug,
  getBugs,
  getBug, 
  deleteBug,
  updateBug
} = require('../../controllers/api/bugs');

//get all bugs
router.get('/', getBugs);

//get single bug
router.get('/:id', getBug);

// post a new bug
router.post('/', createBug);

// delete bug
router.delete('/:id', deleteBug);

// update bug
router.put('/:id', updateBug);


module.exports = router