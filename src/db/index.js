import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



async function connectDB(){
    try{
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST ${connectInstance.connection.host}`)
    }
    catch(error){
        console.log("Mongo DB connection error", error);
        process.exit(1)
    }
} 

export default connectDB