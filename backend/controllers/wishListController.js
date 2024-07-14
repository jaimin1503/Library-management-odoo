import User from "../models/userSchema.js"; // Adjust the path as per your project structure
import Book from "../models/bookSchema.js"; // Import your Book schema/model

export const bookWishList = async (req, res) => {
  const userId = req.user.id; // Assuming userId is obtained from authenticated user
  const { bookId } = req.body; // Assuming bookId is passed in the request body

  try {
    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    // Check if the book is already in the user's wishlist
    if (user.bookWishList.includes(bookId)) {
      return res.status(400).json({
        success: false,
        message: "Book already exists in wishlist",
      });
    }

    // Add the bookId to user's bookWishList array
    user.bookWishList.push(bookId);
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Book added to wishlist successfully",
      user: user, // Optionally, you can send back the updated user object
    });
  } catch (error) {
    console.error("Error adding book to wishlist:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add book to wishlist",
      error: error.message,
    });
  }
};
