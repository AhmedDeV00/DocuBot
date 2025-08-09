export const handleFileUpload = (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    } else {
        res.status(200).send({
            message: "File uploaded successfully",
            fileName: req.file.filename,
            path: req.file.path,
        })
    }
}