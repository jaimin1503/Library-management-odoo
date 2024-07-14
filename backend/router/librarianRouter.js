import express from "express"
const librarianRoute = express.Router();

import { getNormalUser } from "../controllers/userController.js";
import { getDueBookToUser, getIssueBookToUser } from "../controllers/librarianController.js";

librarianRoute.route("/getNormalUsers").get(getNormalUser);

librarianRoute.route("/getIssueBookToUser/:id").get(getIssueBookToUser);

librarianRoute.route("/getDueBookToUser/:id").get(getDueBookToUser);

export default librarianRoute;