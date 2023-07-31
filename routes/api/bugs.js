const express = require("express");
const router = express.Router();
const bugCtrl = require("../../controllers/api/bugs");
// all route begin with /api/bugs

//post new bug
router.post("/", bugCtrl.create);
//get all bugs
router.post("/get-user-bugs", bugCtrl.findBugByUser);


module.exports = router;