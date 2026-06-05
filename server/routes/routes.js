import express from "express";
import { userSignup } from "../controler/userControler.js";

const router = express.Router();
router.post('/signup',userSignup)

export default router;


