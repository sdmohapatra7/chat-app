import dotenv from 'dotenv';
import path from "path";
import cookieParser from "cookie-parser";
import express from 'express'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js'
import {db} from './config/mongoose.js';
const app = express();

const __dirname = path.resolve();
dotenv.config();
const PORT = process.env.PORT;
db();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use('/api/users',userRoutes);
app.use("/api/messages", messageRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT,()=> console.log(`Server Running on Port ${PORT}`));