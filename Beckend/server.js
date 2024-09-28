require('dotenv').config();
const express = require("express");
const app = express()
// const dotenv = require("dotenv")
const cors = require("cors")
app.use(cors())
app.use(express.json())

// dotenv.config()
// const PORT = process.env.PORT
const connectDatabase= require("./config/database")
// const DefaultData = require('./defaultdata.js')
//Connected MongoDB
connectDatabase()

// Route defining
const bookRoute = require('./routes/bookRoutes');
const userRoute = require('./routes/userRoute')
const cartRoute = require('./routes/cartRoutes');
app.use('/user',userRoute)
app.use("/book",bookRoute)
app.use("/cart",cartRoute)

// app.listen(PORT,(req,res)=>{
//     console.log(`Server Started At ${PORT}`)
// })
app.listen(process.env.PORT||3002,()=>{
    console.log(`Server is running`)
})
// DefaultData();