const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const authRoutes = require('./authRoutes');
const server = require('./server');



const protectedRoutes = require('./routes/protectedRoutes');


// server.js or app.js
require('dotenv').config();




const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB database (replace 'mongodb://localhost:27017/myapp' with your MongoDB connection string)
mongoose.connect('mongodb+srv://daveaditya37:MnGWGYz2lmxZnfRr@cluster0.gnj0ok3.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes for user authentication
app.use('/api/auth', authRoutes);

// Middleware for protecting routes
app.use('/api/protected', (req, res, next) => {
  // Check if Authorization header is present
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify JWT token
  jwt.verify(token, '3b5f74ac76aca1de255badaf251cb954f7bc8dd864788cbe61bcc647705f6f199a48ba64e3ac26bc66a24f32c58df75c35b1ae39635c4c31772c97dfef9a72f3', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.userId = decoded.userId;
    next(); // Move to the next middleware
  });
});

// Protected routes
app.use('/api/protected', protectedRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
