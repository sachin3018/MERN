const express = require("express");
const router = express.Router();

const { getUserById, pushOrderInpurchaseList } = require('../controllers/user')
const { isAdmin, isAuthenticate, isSignedIn } = require('../controllers/auth')
const { updateStock } = require('../controllers/product')
const { getOrderByID, createOrder, getAllOrder, getOrderStatus, updateOrderStatus } = require("../controllers/order")

//params
router.param("userId", getUserById)
router.param("orderId", getOrderByID)


//route 

//create
router.post("/order/createOrder/:userId", isSignedIn, isAuthenticate, pushOrderInpurchaseList, updateStock, createOrder )

//get all user
router.get("/order/allOrder/:userId",isSignedIn,isAuthenticate,isAdmin, getAllOrder)

//status of order
router.get("/order/status/:userId", isSignedIn,isAuthenticate,isAdmin, getOrderStatus)
router.put("/order/:orderId/status/:userId", isSignedIn, isAuthenticate, isAdmin, updateOrderStatus)
module.exports = router;