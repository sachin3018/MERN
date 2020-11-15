const express = require("express");
const router = express.Router();

//importing constrollers
const { getProductId,createProduct, getProduct, getPhoto,removeProduct, updateProduct, getAllProduct, getAllUniqueCategory } = require('../controllers/product')
const { getUserById } = require('../controllers/user')
const { isAdmin, isAuthenticate, isSignedIn } = require('../controllers/auth')

//param for product id and userId
router.param("userId", getUserById)
router.param("productId", getProductId)

//request methods
//create
router.post("/product/create/:userId", isSignedIn, isAuthenticate, isAdmin, createProduct);

//get product
router.get("/product/:productId", getProduct);
//middle - ware
//TODO more clear in font end part
router.get("/product/photo/:productId", getPhoto);


//delete
router.delete("/product/delete/:productId/:userId", isSignedIn, isAuthenticate, isAdmin ,removeProduct);


//update 
router.put("/product/update/:productId/:userId", isSignedIn, isAuthenticate, isAdmin , updateProduct);


//listing route
router.get("/products", getAllProduct)
router.get("/products",getAllUniqueCategory)

module.exports = router;