import express from "express";
const bookRouter = express.Router();

import { addBook } from '../controllers/bookController.js';

bookRouter.route("/addBook").post(addBook);

export { bookRouter };