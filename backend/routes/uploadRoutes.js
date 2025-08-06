import express from "express";
const routerUpload = express.Router();

routerUpload.post("/", (req, res) => {
    res.send("Upload route is working!");
})
export default routerUpload;