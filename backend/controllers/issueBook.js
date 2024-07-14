import  mongoose from 'mongoose';
import User from '../models/userSchema.js'; // Adjust the path as per your project structure
import Book from '../models/bookSchema.js'; // Adjust the path as per your project structure

// Controller to issue a book to a user
export const issueBookToUser = async (req, res) => {
    const userId = req.user.id; // Assuming userId is obtained from authenticated user
    const { bookId } = req.body; // Assuming bookId is passed in the request body

    try {
        // Find the user by userId
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Find the book by bookId
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        // Check if the book is already borrowed
        if (book.Quantity<1) {
            return res.status(400).json({
                success: false,
                message: "Book is out of stock"
            });
        }
        console.log("user",user)
        if(user.bookIssue?.length>=5){
            return res.status(200).json({
                success:false,
                message:"you reached max limit"
            })
        }
        // Update book's BorrowedBy field with the userId
        book.BorrowedBy.push(userId);
        book.Quantity-=1
        await book.save();

        // Update user's bookIssue array with the bookId
        user.bookIssue.push(bookId);
       

        // Optionally, update bookHistry with issued book details
        const issuedBook = {
            bookId,
            issuedate:Date.now(),
            duedate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // Example: Due date after 15 days
        };
        user.bookHistry.push(issuedBook);
        await user.save();
        const updateduser=await User.findById(userId)
        return res.status(200).json({
            success: true,
            message: "Book issued successfully",
            user: updateduser // Optionally, you can send back the updated user object
        });

    } catch (error) {
        console.error('Error issuing book:', error);
        return res.status(500).json({
            success: false,
            message: "Failed to issue book",
            error: error.message
        });
    }
};

// Controller to return a book from a user
export const returnBook = async (req, res) => {
    const userId = req.user.id; // Assuming userId is obtained from authenticated user
    const { bookId } = req.body; // Assuming bookId is passed in the request body

    try {
        // Find the user by userId
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Find the book by bookId
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        // Check if the book is borrowed by the user
        if (!user.bookIssue.includes(bookId)) {
            return res.status(400).json({
                success: false,
                message: "Book not issued to this user"
            });
        }

        // Remove the bookId from user's bookIssue array
        user.bookIssue = user.bookIssue.filter(id => id.toString() !== bookId);

        // Optionally, update the bookDue array if it's maintained
        user.bookDue = user.bookDue.filter(id => id.toString() !== bookId);

        // Update user's bookHistry array by marking the return date
        user.bookHistry = user.bookHistry.map(history => {
            console.log("insode book")
            if (history.bookId.toString() === bookId) {
                console.log("inside if")
                history.returnedDate = new Date();
            }
            return history;
        });
        console.log("user",user)
        // Save the updated user
        await user.save();

        // Remove the userId from book's BorrowedBy array
        book.BorrowedBy = book.BorrowedBy.filter(id => id.toString() !== userId);
        book.Quantity+=1
        // Save the updated book
        await book.save();
        const updatedUser=await User.findById(userId)
        return res.status(200).json({
            success: true,
            message: "Book returned successfully",
            user: updatedUser // Optionally, you can send back the updated user object
        });

    } catch (error) {
        console.error('Error returning book:', error);
        return res.status(500).json({
            success: false,
            message: "Failed to return book",
            error: error.message
        });
    }
};




