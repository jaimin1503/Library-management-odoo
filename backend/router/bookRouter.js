import express from "express";
const bookRouter = express.Router();

import { addBook, fatchBooks, fatchBook } from '../controllers/bookController.js';

bookRouter.route("/addBook").post(addBook);

bookRouter.route("/getBooks").get(fatchBooks);

bookRouter.route("/getBook/:id").get(fatchBook);

export { bookRouter };