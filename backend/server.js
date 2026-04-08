const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
require('dotenv').config();
const connectDB = require('./config/db');
const Contact = require('./models/Contact');

// Connect to database
connectDB();

const app = express();

// Trust proxy for Render/Heroku rate limiting
app.set('trust proxy', 1);

const PORT = process.env.PORT || 5000;

// ==========================================
// 1. THE TRUE BULLETPROOF CORS FIX
// ==========================================
// This MUST come before Helmet and your routes.
const corsOptions = {
  origin: [
    'https://pururaghuwanshi.in',
    'https://www.pururaghuwanshi.in',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply the rules to standard requests
app.use(cors(corsOptions));

// Apply the EXACT SAME rules to the preflight checks
app.options('*', cors(corsOptions));

// ==========================================
// 2. HELMET (Configured to allow CORS)
// ==========================================
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

// ==========================================
// 3. RATE LIMITING & PARSERS
// ==========================================
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Bumped to 10 so we can actually test it!
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.method === 'OPTIONS' // ChatGPT's magic fix!
});
app.use('/api', apiLimiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data Sanitization against XSS
app.use(xss());

// ==========================================
// 4. ROUTES
// ==========================================
// Basic health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Secure backend is running' });
});

// Contact form submission route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const contact = await Contact.create({
      name,
      email,
      message
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact:', error.message);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    res.status(500).json({ error: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});