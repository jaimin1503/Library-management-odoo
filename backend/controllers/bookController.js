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

        res.status(201).json(savedBook);
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

        res.json(result);
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

        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};