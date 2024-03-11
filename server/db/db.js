import mongoose from "mongoose";
const connectedToDB = async()=>{
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL) 
       console.log(`Connected to Database ${conn.connection.host}`)
    }catch(error){
       console.log(`Error in Mongodb ${error}`)
    }
}

export default connectedToDB;
