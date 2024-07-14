import User from "../models/userSchema.js"; // Adjust the path as per your project structure
import Book from "../models/bookSchema.js"; // Import your Book schema/model

import User from '../models/userSchema.js'; // Adjust the path as per your project structure
import Book from '../models/bookSchema.js'; // Import your Book schema/model

export const bookWishList = async (req, res) => {
    const userId = req.user.id; // Assuming userId is obtained from authenticated user
    const { bookId } = req.body; // Assuming bookId is passed in the request body

    try {
        // Find the user by userId and populate all referenced fields
        let user = await User.findById(userId)
            .populate('bookIssue')
            .populate('bookDue')
            .populate('bookHistory')
            .populate('bookWishList')
            .populate('profile');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Check if the book exists
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        // Check if the book is already in the user's wishlist
        if (user.bookWishList.includes(bookId)) {
            return res.status(400).json({
                success: false,
                message: "Book already exists in wishlist"
            });
        }

        // Add the bookId to user's bookWishList array
        user.bookWishList.push(bookId);
        user = await user.save(); // Save the updated user object

        // Populate user again to get the updated populated values
        user = await User.findById(userId)
            .populate('bookIssue')
            .populate('bookDue')
            .populate('bookHistory')
            .populate('bookWishList')
            .populate('profile');

        // Return the updated user object with populated values
        return res.status(200).json({
            success: true,
            message: "Book added to wishlist successfully",
            user: user // Send back the updated user object with all populated values
        });

    } catch (error) {
        console.error('Error adding book to wishlist:', error);
        return res.status(500).json({
            success: false,
            message: "Failed to add book to wishlist",
            error: error.message
        });
    }
};
