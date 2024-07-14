import express from "express";
const bookRouter = express.Router();

import { addBook, fatchBooks, fatchBook,updateBook,deleteBook } from '../controllers/bookController.js';

bookRouter.route("/addBook").post(addBook);

bookRouter.route("/getBooks").get(fatchBooks);

bookRouter.route("/getBook/:id").get(fatchBook);
//Raj
export { bookRouter };