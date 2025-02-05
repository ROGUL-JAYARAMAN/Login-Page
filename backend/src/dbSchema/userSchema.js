import mongoose from "mongoose";

const userSchema = new mongoose.Schema({    //define the schema of the collion
    name:{
        type:String
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpires:Date
},{timestamps:true});            // timestamp create new obj-values --> createAt & updatedAt

const user=mongoose.model("User",userSchema);  //creating a collection with the given structure using moadal

export default user;