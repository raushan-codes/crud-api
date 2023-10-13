import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/post.routes';

export const app = express();
app.use(express.json());
app.use('/v1', router)





