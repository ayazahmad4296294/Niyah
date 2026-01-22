import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins for dev
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.routes.js';
import reviewRoutes from './routes/review.routes.js';
import ratingRoutes from './routes/rating.routes.js';
import complaintRoutes from './routes/complaint.routes.js';

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/complaints', complaintRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const conn = mongoose.connection;
    console.log(`MongoDB Connected to: ${conn.host}:${conn.port}/${conn.name}`);
  })
  .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected successfully!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} - READY FOR REQUESTS`);
});
