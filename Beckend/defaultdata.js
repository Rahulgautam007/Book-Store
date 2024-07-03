const Products= require('./model/bookModel.js');
const productsdata = require('./constant/productdata.js');

const DefaultData = async()=>{
    try {
        await Products.deleteMany({});
        const storeData = await Products.insertMany(productsdata);
    } catch (error) {
        console.log("error" , error.message);
    }
};
module.exports = DefaultData;