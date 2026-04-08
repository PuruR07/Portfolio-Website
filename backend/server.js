const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./config/db');
const Contact = require('./models/Contact');

const app = express();
app.set('trust proxy', 1);

const PORT = process.env.PORT || 5000;

// ── REQUEST LOGGING ───────────────────────────────────────
app.use(morgan('combined'));

// ── CORS ──────────────────────────────────────────────────
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

app.options('*', cors(corsOptions));  // preflight — must be first
app.use(cors(corsOptions));

// ── SECURITY MIDDLEWARE ───────────────────────────────────
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());

// ── RATE LIMITER ──────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Too many messages sent. Please try again in an hour.' },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.method === 'OPTIONS'
});

// ── ROUTES ────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    // Trim inputs before any validation
    const name = req.body.name?.trim();
    const email = req.body.email?.trim().toLowerCase();
    const message = req.body.message?.trim();

    // Presence check (catches empty strings after trim too)
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

// ── 404 HANDLER ───────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── GLOBAL ERROR HANDLER ──────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// ── START ─────────────────────────────────────────────────
const startServer = async () => {
  try {
    await connectDB();
    const server = app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );

    // Graceful shutdown on Render/process restart
    process.on('SIGTERM', () => {
      console.log('SIGTERM received, shutting down gracefully');
      server.close(() => {
        console.log('Process terminated');
        process.exit(0);
      });
    });

  } catch (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  }
};

startServer();