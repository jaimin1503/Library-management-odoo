import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import connect from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { bookRouter } from "./router/bookRouter.js";
import router from "./router/userRouter.js";
import librarianRoute from "./router/librarianRouter.js";
import adminRoute from "./router/adminRouter.js";

connect();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(
  cors({
    origin: ["https://do-remote.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use("/api/book", bookRouter);
app.use("/api/user", router);

app.use("/api/admin", adminRoute);
app.use("/api/librarian", librarianRoute);

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
