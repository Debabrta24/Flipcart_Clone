import express from "express"
import Connection from "./dataBase/Db.js";
import dotenv from 'dotenv'
import DefaultData from "./default.js";
const app = express();


Connection()
app.listen(5000, () => {
    console.log("servr started at 5000")
})
// DefaultData()