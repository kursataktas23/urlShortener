import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';

dotenv.config({ path: './config/.env' });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use('/', indexRouter);
app.use('/api', urlsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});