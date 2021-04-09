const express = require("express");
const { signout, signup, signin } = require("../middleware/auth");
const router = express.Router();


router.post('/signup', signup)
router.post('/signin', signin)
router.post("/signout", signout);

module.exports = router

// id - 105889626819 - jat0c491e7444vpp7hqhvfasa68ep48j.apps.googleusercontent.com
// // secret - FCLGBvAe30dOEKy4WNKTW19W