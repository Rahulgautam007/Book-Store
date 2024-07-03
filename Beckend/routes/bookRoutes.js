const express = require("express");
const router = express.Router();
const{getBook}= require("../controller/bookcontroller")

router.route('/').get(getBook)










module.exports = router