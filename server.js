import express from "express";
import dotenv from "dotenv";
import quoteRoutes from './routes/secret-quote.js'
import authRoutes from './routes/auth.js'

const app = express();

dotenv.config();

app.use(express.json());

// Mounting routes
app.use('/api/auth', authRoutes)
app.use('/api', quoteRoutes)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
