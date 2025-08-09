import express from "express";
import upload from "../middlewares/uploadMiddlewar.js";
import { handleFileUpload } from "../controllers/uploadController.js";


const routerUpload = express.Router();

routerUpload.post("/", upload.single('file'), handleFileUpload);
export default routerUpload;