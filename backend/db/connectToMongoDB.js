import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to Mongodb")
    }
    catch(error){
console.log("Error contecting to Mongodb",error.message)
    }
}

export default connectToMongoDB