import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true, "Please provide your name"]
    },
    email:{
        type : String,
        required : [true, "Please provide your email"]
    },
    subject:{
        type : String,
        required: [true, "Please provide subject"]
    },
    message : {
        type : String,
        required : [true,  "Please provide a message"]
    }
})

const UserModel = mongoose.models.UserModel || mongoose.model("UserModel", userSchema);
export default UserModel;