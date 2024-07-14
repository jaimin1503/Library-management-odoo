import express from "express"
const router = express.Router()
// import {auth,isStudent,isAdmin} from "../middleware/auth"
import {sendotp,signup,login,changePassword} from "../controllers/authController.js";
// const {sendresetPsswordToken,restPassword}=require("../controller/ResetPassword.controller");
// const { contactUsController } = require("../controller/ContactUs.controller");
// router.post("/sendotp", sendotp)
router.post("/signup", signup)
router.post("/login", login)
// router.put("/changePassword",auth,changePassword)
// router.post("/sendresetPsswordToken",sendresetPsswordToken)
// router.put("/restPassword",restPassword)
// router.post("/contactus",contactUsController)
export default  router