import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.group("error while connecting with mongoDB", error)
    }
} 

export default connectMongoDB