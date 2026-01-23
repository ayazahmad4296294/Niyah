/**
 * server.js - Backend Entry Point
 * Orchestrates middleware, database connection, and API routing.
 */

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * Global Middleware
 * - CORS: Configured to allow cross-origin requests from the frontend SPA.
 * - JSON: Enables parsing of application/json request bodies.
 */
app.use(cors({
  origin: '*', // Allow all origins for development; tighten for production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

/**
 * Request Logger Middleware
 * Provides real-time visibility into incoming API traffic for debugging.
 */
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Route Imports
// Grouping logic by resource domain for modularity and scalability.
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.routes.js';
import reviewRoutes from './routes/review.routes.js';
import ratingRoutes from './routes/rating.routes.js';
import complaintRoutes from './routes/complaint.routes.js';
import companyRoutes from './routes/companyRoutes.js';
import applicationRoutes from './routes/application.routes.js';
import blogRoutes from './routes/blog.routes.js';

// API Endpoints
// Each route is prefixed with /api to separate backend services from frontend assets.
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/companyapplications', applicationRoutes);
app.use('/api/blogs', blogRoutes);

/**
 * Database Connection (MongoDB)
 * Uses Mongoose as the ODM (Object Document Mapper).
 */
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const conn = mongoose.connection;
    console.log(`MongoDB Connected to: ${conn.host}:${conn.port}/${conn.name}`);
  })
  .catch(err => console.error('MongoDB Connection Error:', err));

// Base status routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected successfully!' });
});

// Listener initialization
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} - READY FOR REQUESTS`);
});
