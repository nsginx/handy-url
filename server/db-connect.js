import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export default async function connectToMongoDb(){
    return await mongoose.connect(process.env.MONGO_URI)
}