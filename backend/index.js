import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerUpload from './routes/uploadRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// route
app.use("/api/upload", routerUpload);

app.get('/', (req, res) => {
    res.send('DocuBot AI backend is running 🚀');
})


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});