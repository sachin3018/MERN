const express = require("express");
const router = express.Router();

const { isAuthenticate, isSignedIn } = require("../controllers/auth");
const { getToken, proceedPayment } = require("../controllers/payment");
const { getUserById } = require('../controllers/user')

router.param("userId", getUserById)

router.get("/payment/token/:userId", isSignedIn, isAuthenticate, getToken);
router.post("/payment/brainTree/:userId", isSignedIn, isAuthenticate, proceedPayment);

module.exports = router;