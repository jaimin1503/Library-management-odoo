import asyncHandler from 'express-async-handler';
import Book from '../models/bookSchema.js';
import { v2 as cloudinary } from 'cloudinary';

export const addBook = asyncHandler(async(req, res) => {
    const { BookName, ISBN, Title, Author, Publisher, Year, Genre, Quantity, Description, Thumbnail } = req.body;

    console.log(req.body);

    if (!BookName || !ISBN || !Title || !Author || !Publisher || !Year || !Genre || !Quantity || !Description || !Thumbnail) {
        return res.status(400).json({ message: "All fields are required." });
    }

    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET
    });

    cloudinary.uploader.upload(req.body.Thumbnail, {
        public_id: 'Tunbnail of ' + req.body.BookName
    }, async (error, result) => {

        if (error) {
            console.error('Error uploading image to Cloudinary:', error);
            return res.status(500).json({ message: 'Error uploading image to Cloudinary' });
        }

        if (!result || !result.secure_url) {
            console.error('Invalid Cloudinary response:', result);
            return res.status(500).json({ message: 'Invalid Cloudinary response' });
        }

        const newBook = new Book({
            ...req.body,
            Thumbnail: result.secure_url,
          });

        const savedBook = await newBook.save();
        console.log("Book created successfully");

        res.status(201).json({data:savedBook, success: true,message:"add book successfully"});
        // res.status(200).json(patient);
    });
})

export const fatchBooks = async (req, res) => {
    try {
        const books = await Book.find({}, 'BookName Thumbnail Title Author Genre Quantity BorrowedBy');

        const result = books.map(book => ({
            Id : book._id,
            BookName: book.BookName,
            Thumbnail: book.Thumbnail,
            Title: book.Title,
            Author: book.Author,
            Genre: book.Genre,
            Remain : book.Quantity - book.BorrowedBy.length
        }));
        res.status(200).json({ success: true,data:result,message:"all book fatch successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const fatchBook = async (req, res) => {
    const { id } = req.params; // Assuming the ID is passed as a route parameter

    try {
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            data:book,
            success: true,
            message:"fatch bokk completed"
    });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBook = asyncHandler(async (req, res) => {
    const { id } = req.params; 
    const { BookName, ISBN, Title, Author, Publisher, Year, Genre, Quantity, Description, Thumbnail } = req.body;

    // Check if all required fields are present
    if (!BookName || !ISBN || !Title || !Author || !Publisher || !Year || !Genre || !Quantity || !Description || !Thumbnail) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Find the book by ID
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found." });
        }

        // Configure Cloudinary (move this outside the function if possible)
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET
        });

        // Upload new thumbnail to Cloudinary
        const result = await cloudinary.uploader.upload(req.body.Thumbnail, {
            public_id: 'Thumbnail of ' + req.body.BookName
        });

        // Ensure Cloudinary upload was successful
        if (!result || !result.secure_url) {
            console.error('Invalid Cloudinary response:', result);
            return res.status(500).json({ message: 'Error uploading image to Cloudinary' });
        }

        // Update book details including the new Thumbnail URL
        const updatedBook = await Book.findByIdAndUpdate(id, {
            BookName,
            ISBN,
            Title,
            Author,
            Publisher,
            Year,
            Genre,
            Quantity,
            Description,
            Thumbnail: result.secure_url,
        }, { new: true });

        console.log("Book updated successfully");
        res.status(200).json({ success: true, data: updatedBook,message:`book updated successfully` });
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ success: false, message: 'Error updating book', error: error.message });
    }
});
export const deleteBook = async (req, res) => {
    const { id } = req.params; // Assuming the ID is passed as a route parameter

    try {
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const dletedBook=await Book.findByIdAndDelete(id)
        res.status(200).json({deleteBook,message:"book deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
