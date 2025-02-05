import bcrypt from "bcryptjs";

import user from "../dbSchema/userSchema.js";
import genrateVerificationToken from "../functions/genrateVerificationToken.js";
import genrateAndSetToken from "../functions/genrateAndSetToken.js";

const Signup = async (req, res) => {
  const { name, userName, email, password } = req.body; //get data from frontend
  try {
    if (!userName || !email || !password) {
      //check all the req fields are filled
      throw new Error({message:"All fields mandatory"});
    }

    const userNameExists = await user.findOne({ userName:userName }); //check userNameExists -> match - return obj or return null in db
    const emailExists = await user.findOne({ email:email }); //check emailexists in db
    if (userNameExists&&emailExists) {
      //data exists throw error message
      throw new Error("User already exists");
    }

    const hashPassword = await bcrypt.hash(password,10);
    const verificationToken = genrateVerificationToken();
    
    const newUser= new user({
        name : name,
        userName : userName,
        email : email,
        password : hashPassword,
        verificationToken : verificationToken,
        verificationTokenExpires : Date.now() + 24*60*60*1000
    }) 
    newUser.save()
    //jwt
    console.log(newUser._id);
    genrateAndSetToken(newUser,res); //userLogin._id -> each user have unique id genrated by mongodb
    
    res.status(201).json({
      success : true,
      message : "User created successfully",
      userData:{
        ...newUser._doc,   //we can use ...userLogin._doc ._doc -> it will check whether the actual data spreaded
        password:undefined
      }
    })

  } catch (error) {
    res.json({ status: res.status, message: error.message });
  }
};

export default Signup;
