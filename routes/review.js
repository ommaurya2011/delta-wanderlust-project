const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/rapAsync.js");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware.js");

const reviewControllers = require("../controllers/reviews.js");


//-------------Reviews

//Post Review Route

router.post("/", isLoggedIn, validateReview, wrapAsync(reviewControllers.createReview));

//Delete Review Route

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewControllers.deleteReview));

module.exports = router;