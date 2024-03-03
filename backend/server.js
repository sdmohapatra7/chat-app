import dotenv from 'dotenv';

import express from 'express'
import userRouter from './routes/userRoute.js'

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use('/api/auth',userRouter)

app.listen(PORT,()=> console.log(`Server Running on Port ${PORT}`));