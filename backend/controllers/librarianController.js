import asyncHandler from "express-async-handler";
import Book from "../models/bookSchema.js";
import User from "../models/userSchema.js";

export const getIssueBookToUser = asyncHandler(async(req, res) => {
    try {
        const userId = req.params.id;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required.' });
        }

        const userBook = await User.findById(userId).populate('bookIssue').exec();

        if (!userBook) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({ userBook });
    } catch (error) {
        res.status(500).json({mes : "Internal Server Error."});
    }
})

export const getDueBookToUser = asyncHandler(async(req, res) => {
    try {
        const userId = req.params.id;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required.' });
        }

        const userBook = await User.findById(userId).populate('bookDue').exec();

        if (!userBook) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({ userBook });
    } catch (error) {
        res.status(500).json({mes : "Internal Server Error."});
    }
})