import dotenv from 'dotenv';

import express from 'express'
import userRouter from './routes/userRoute.js'
import {db} from './config/mongoose.js';
const app = express();

dotenv.config();
db();

const PORT = process.env.PORT;


app.use('/api/auth',userRouter)

app.listen(PORT,()=> console.log(`Server Running on Port ${PORT}`));