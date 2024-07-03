const express = require("express");
const { fetchitem,additem,deleteitem,updateitem } = require("../controller/cartcontroller");
const router = express.Router();


router.route('/fetchitem').post(fetchitem)
router.route('/additem').post(additem)
router.route('/deleteitem/:id').delete(deleteitem)
router.route('/updateitem').put(updateitem)












module.exports= router