import mongoose from "mongoose";

const BookShema = new mongoose.Schema(
    {
        BookName : {
            type : String,
            required : true
        },
        ISBN : {
            type : String,
            required : true
        },
        Title : {
            type : String,
            required : true
        },
        Author : {
            type : String,
            required : true
        },
        Publisher : {
            type : String,
            required : true,
        },
        Year : {
            type : Date,
            required : true
        },
        Genre : {
            type : String,
            required : true
        },
        Quantity : {
            type : Number,
            required : true,
        },
        BorrowedBy : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : "User",
        },
        Description : {
            type : String,
            required : true
        },
        Thumbnail : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true,
    }
);

export default mongoose.model("Books", BookShema);