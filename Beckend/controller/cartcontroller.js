const User = require("../model/userModel");
const Book = require("../model/bookModel")

exports.fetchitem = async (req,res)=>{
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if(user){
            const items = user.carts;
            res.status(200).json(items);
        }
        else{
            res.status(401).send("Invalid user");
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}
exports.additem = async (req,res)=>{
    try {
        const id = req.body.id;
        const data = await Book.findById(id);
        const { userId } = req.body;
        const user = await User.findById(userId);
        if(user){
            const cartdata = await user.addtocart(data);
            res.status(200).json(user.carts);
        }
        else{
            res.status(401).json({error:"Invalid user"});
        }
    } catch (error) {
        res.status(401).json({ error: "error" });
    }
}

exports.deleteitem = async (req,res)=>{
    try {
        const id = req.params.id;
        const { userId } = req.body;
        const user = await User.findById(userId);

        if (user) {
            const cartdata = await user.removeFromCart(id);
            await user.save();
            // console.log(cartdata);
            res.status(200).json(user.carts);

        } else {
            res.status(401).send("Invalid User");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

exports.updateitem = async (req,res)=>{
    try {
        const {id,quantity} = req.body;
        const { userId } = req.body;
        const user = await User.findById(userId);
        const data = await Book.findById(id);
        if(user){
            const cartdata = await user.updateCartItemQuantity(id,quantity);
            // await patient.save();
            res.status(200).json({cart :  user.carts , Book : data});
        }
        else{
            res.status(401).send("Invalid User");
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

