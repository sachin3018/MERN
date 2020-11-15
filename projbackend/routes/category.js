const express = require("express")
const router = express.Router();

//importing controllers
const { getCategoryId, createCategory, getAllCategories, getCategory, updateCategory, removeCategory } = require("../controllers/category")
const {isAdmin,isAuthenticate,isSignedIn} = require("../controllers/auth")
const  {getUserById } = require("../controllers/user")

//paramas
router.param("userId", getUserById)
router.param("categoryId", getCategoryId)

//actual routes
router.post("/category/create/:userId", isSignedIn, isAuthenticate, isAdmin, createCategory);

//read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategories);

//update
router.put("/category/update/:categoryId/:userId", isSignedIn, isAuthenticate, isAdmin, updateCategory);

//delete
router.delete("/category/delete/:categoryId/:userId", isSignedIn, isAuthenticate, isAdmin, removeCategory);


module.exports = router;