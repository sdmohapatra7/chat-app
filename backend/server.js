import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import express from 'express'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {db} from './config/mongoose.js';
const app = express();

dotenv.config();
const PORT = process.env.PORT;
db();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use('/api/users',userRoutes)

app.listen(PORT,()=> console.log(`Server Running on Port ${PORT}`));