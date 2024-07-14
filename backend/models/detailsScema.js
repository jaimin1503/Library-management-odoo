import mongoose from "mongoose";
const detailSchema=new mongoose.Schema({
   dueCharge:{
    type:Number,
    default:100
   },
   dueDays:{
    type:Number,
    default:30
   },
   limitIssue:{
    type:Number,
    default:5
   }
})
const  Detail=mongoose.model("Detail",detailSchema) 
export default Detail