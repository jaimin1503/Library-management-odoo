import asyncHandler from 'express-async-handler';
import User from "../models/userSchema.js";

export const getUsers = asyncHandler(async(req, res) => {
    try {
        const users = await User.find();

        const normalUsers = users.filter(user => user.role === 'user');
        const librarians = users.filter(user => user.role === 'librarian');
    
            res.status(200).json({"normalUsers" : normalUsers, "librarian" : librarians});
    } catch (err) {
        res.status(500).json({ mes : "Internal Server Error"});
    }
})

export const getNormalUser = asyncHandler(async(req, res) => {
    try {
        const normalUsers = await User.find({ role: 'user' });
    
        res.status(200).json(normalUsers)

    } catch(err) {
        res.status(500).json({ mes : "Internal Server Error"});
    }
})

