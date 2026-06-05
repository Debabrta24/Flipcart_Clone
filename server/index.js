import express from "express"
import Connection from "./dataBase/Db.js";
import dotenv from 'dotenv'
import DefaultData from "./default.js";
import router from "./routes/routes.js";
import cors from 'cors'
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
app.use('/', router)

Connection()
app.listen(5000, () => {
    console.log("servr started at 5000")
})
// DefaultData()