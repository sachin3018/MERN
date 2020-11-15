const express = require("express");
const route = express.Router();
const { check } = require('express-validator');

const { signout, signup, signin, isSignedIn } = require("../controllers/auth");


route.post('/signup',[
    check("name").isLength({min : 3}).withMessage("name should be have of 3 character"),
    check("email").isEmail().withMessage("please enter valid email"),
    check("password").isLength({min : 3}).withMessage("Password should be have atleast 3 character :(")
], signup)


route.post('/signin',[
    check("email").isEmail().withMessage("please enter valid email"),
    check("password").isLength({min : 3}).withMessage("Password is required my friend:(")
], signin)


route.get('/signout',signout)

module.exports = route;