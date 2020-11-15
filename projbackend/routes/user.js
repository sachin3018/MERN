const express = require("express");
const router = express.Router();

const { getUserById, getUser, updateData, userPurchaseList } = require("../controllers/user")
const { isAdmin, isAuthenticate, isSignedIn } = require("../controllers/auth")


router.param("userid", getUserById);

router.get("/user/:userid" , isSignedIn, isAuthenticate ,getUser);

router.put("/user/:userid",isSignedIn, isAuthenticate ,updateData)

router.get("/orders/user/:userid",isSignedIn, isAuthenticate , userPurchaseList)

module.exports = router;
