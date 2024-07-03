const express = require("express");
const { signUp, login } = require("../controller/usercontroller");
const router = express.Router();


router.route('/signup').post(signUp)
router.route('/login').post(login)











module.exports= router