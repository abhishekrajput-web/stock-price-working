import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    password:{
        type:String,
        reqired:true
    },

    confirmPassword:{
        type:String,
        required:true
    },


    email:{
        type:String,
        required:true,
    },

    phone:{
        type:String,
        required:true
    },

    image:{
     type:String,
     default:"https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png",
    },

    role:{
        type:Number,
        default:0
    },

    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending', // Default status is pending
      },


}, {timestamps:true});

const User = mongoose.model("User", userSchema);

export default User;