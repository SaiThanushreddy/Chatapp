import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () =>{
    const url = process.env.MONGO_URI
        
    try{
        const conn = await mongoose.connect(url);
        console.log("yes")
    }catch(e){
        console.log("error"+ e)
    }
}

export default connectDB