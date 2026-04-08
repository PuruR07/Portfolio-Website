const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
require('dotenv').config();
const connectDB = require('./config/db');
const Contact = require('./models/Contact');

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('DB connection failed:', err);
  }
};

startServer();
const app = express();
app.set('trust proxy', 1);

const PORT = process.env.PORT || 5000;

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

// ✅ STEP 1: Handle ALL preflight requests immediately.
// This must be the very first thing — before helmet, before rate limiting.
app.options('*', cors(corsOptions));

// ✅ STEP 2: Apply CORS headers to all other requests.
app.use(cors(corsOptions));

// ✅ STEP 3: Helmet after CORS.
app.use(helmet({ crossOriginResourcePolicy: false }));

// ✅ STEP 4: Rate limiter only on non-OPTIONS requests.
// Scoped to /api/contact only (not the health check).
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Too many messages sent. Please try again in an hour.' },
  standardHeaders: true,
  legacyHeaders: false,
  // Belt-and-suspenders: skip preflight even though step 1 already handles it
  skip: (req) => req.method === 'OPTIONS'
});

app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Length guards
    if (name.length > 100 || email.length > 254 || message.length > 2000) {
      return res.status(400).json({ error: 'Input exceeds maximum allowed length' });
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    await Contact.create({ name, email, message });

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

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));