const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/rapAsync.js");
const {isLoggedIn, isOnwer, validateLiting} = require("../middleware.js");
const listingControllers = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage: storage });




router
    .route("/")
    .get(wrapAsync(listingControllers.index))
    .post( isLoggedIn, validateLiting, upload.single("listing[image]"), wrapAsync(listingControllers.create));

    //New Route 
    router.get("/new", isLoggedIn, listingControllers.newFrom);


router
    .route("/:id")
    .get(wrapAsync(listingControllers.show))
    .put(isLoggedIn, isOnwer, validateLiting, upload.single("listing[image]"), wrapAsync(listingControllers.update))
    .delete(isLoggedIn, isOnwer, wrapAsync(listingControllers.delete));


//Edit Route

router.get("/:id/edit", isLoggedIn, isOnwer, wrapAsync(listingControllers.edit));



module.exports = router;