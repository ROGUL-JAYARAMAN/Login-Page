import express from "express";
//Route imports
import Signup from "../api/Signup.js";

const router = express.Router(); 
 

router.post("/signup",Signup);
router.get("/login",(req,res)=>{res.send("Login")});
router.post("/logout",(req,res)=>{res.send("Logout")});

export default router;