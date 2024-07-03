const User = require("../model/userModel");
const bcrypt = require("bcrypt")

//Sign up 

exports.signUp = async (req,res)=>{
 try {
    const {fullname,email,password}=req.body;
    const user= await User.findOne({email})
    if(user){
        res.status(400).json({message:"User all ready exists"})
    }
    const hashPassword = await bcrypt.hash(password,10)
    const createdUser = new User({
        fullname:fullname,
        email:email,
        password:hashPassword
    })
    await createdUser.save()
    res.status(200).json({message:"User created succesfully",user:{
        _id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email,
    }
})
 } catch (error) {
    console.log("Error",error)
    res.status(500).json({message:"internal server error"})
 }
}

//User Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successfully",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            });
        }
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
