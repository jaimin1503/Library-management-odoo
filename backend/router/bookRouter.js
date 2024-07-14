import express from "express";
const bookRouter = express.Router();

import { addBook, fatchBooks, fatchBook,updateBook,deleteBook } from '../controllers/bookController.js';
import {issueBookToUser,returnBook} from "../controllers/issueBook.js";
import {auth,isUser } from "../middlewares/authMiddleware.js";

bookRouter.route("/addBook").post(addBook);

bookRouter.route("/getBooks").get(fatchBooks);

bookRouter.route("/getBook/:id").get(fatchBook);
bookRouter.route("/updateBook/:id").put(updateBook);
bookRouter.route("/deleteBook/:id").delete(deleteBook);
bookRouter.route("/issueBookToUser").post(auth,isUser,issueBookToUser);
bookRouter.route("/returnBookToUser").put(auth,isUser,returnBook);

//Raj
export { bookRouter };