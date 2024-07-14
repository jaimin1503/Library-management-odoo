import express from "express"
const adminRoute = express.Router()

import { getUsers } from "../controllers/userController.js";

adminRoute.route("/getUsers").get(getUsers);

export default adminRoute;