const express = require("express");
const { signout, signinNormal, signinGoogle, signupNormal, signupGoogle } = require("../middleware/auth");
const router = express.Router();


router.post('/signupNormal', signupNormal)
router.post('/signupGoogle', signupGoogle)
router.post('/signinNormal', signinNormal)
router.post('/signinGoogle', signinGoogle)
router.post("/signout", signout);

module.exports = router

// id - 105889626819 - jat0c491e7444vpp7hqhvfasa68ep48j.apps.googleusercontent.com
// // secret - FCLGBvAe30dOEKy4WNKTW19W