const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users.js');

// All paths start with 'api/users'

// POST /api/users (create user - sign up)
router.post('/', usersCtrl.create);

module.exports = router;