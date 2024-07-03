const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    carts: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book'
            },
            name: String,
            price: Number,
            category: String,
            title: String,
            Image: String,
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
})

userSchema.methods.addtocart = async function(cart) {
    try {
        this.carts = this.carts.concat(cart);
        await this.save();
        return this.carts;
    } catch (error) {
        console.log(error);
    }
};
userSchema.methods.removeFromCart = async function(itemToRemove) {
    try {
        this.carts = this.carts.filter(item => item._id.toString() !== itemToRemove);
        await this.save();
        return this.carts;
    } catch (error) {
        console.log(error);
    }
};

userSchema.methods.updateCartItemQuantity = async function(itemId, newQuantity) {
    try {
        this.carts.forEach(item => {
            if (item._id.toString() === itemId) {
                item.quantity = newQuantity;
            }
        });
        await this.save();
        return this.carts;
    } catch (error) {
        console.log(error);
    }
};
const User = mongoose.model("User", userSchema)
module.exports = User;