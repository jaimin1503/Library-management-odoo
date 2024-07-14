import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    contactNumber: {
        type: Number,
        required: true,
        min: [1000000000, 'Contact number must be at least 10 digits long'],
        max: [9999999999, 'Contact number must be at most 10 digits long']
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    userName:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true
    },
    charges:{
        type:Number,
        default:0
    },
    bookIssue:[
        {type:mongoose.Schema.Types.ObjectId, ref:"Bookes"}
    ],
    bookDue:[
        {
            type:mongoose.Schema.Types.ObjectId, 
            ref:"Bookes"
        }
    ],
    
    bookHistry:[
        {
            type:mongoose.Schema.Types.ObjectId,
            duedate:Date.now()+15 * 24 * 60 * 60 * 1000,
            ref:"Bookes"
        }
    ],
    bookWishList:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Bookes"
        }
    ],
    profile:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Profile"
        }
    ]
})
const  User=mongoose.model("User",userSchema) 
export default User