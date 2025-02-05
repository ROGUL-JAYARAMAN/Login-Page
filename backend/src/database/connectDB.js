import mongoose from "mongoose"; 

const connectDB = async()=>{  //has sep flow bcz it take some time to connect to db
    try{
        const connect = await mongoose.connect(process.env.DB_URI);  //establishing the connection usnig connect 
        console.log("Connection Name : "+connect.connection.name);
        console.log("Connection Port : "+connect.connection.port);
        console.log("Connection Host : "+connect.connection.host);
        console.log("Connection state : "+connect.connection.readyState);
    }
    catch(error){
        console.log("Failed to connect to database \n"+ error);
        process.exit(1);
    }
}

export default connectDB;