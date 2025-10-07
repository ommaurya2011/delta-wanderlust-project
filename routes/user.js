const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/rapAsync.js");
const passport = require("passport");
const { saveRadirectUrl } = require("../middleware.js");

const userControllers = require("../controllers/users.js");

router
    .route("/signup")
    .get(userControllers.signup)
    .post(wrapAsync(userControllers.postSignup));


router
    .route("/login")
    .get(userControllers.login)
    .post( saveRadirectUrl, 
    passport.authenticate("local", { failureRedirect: '/login',failureFlash: true }), 
    wrapAsync(userControllers.postLogin));


router.get("/logout", userControllers.logout)

module.exports = router;