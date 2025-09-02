// index.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Open SQLite DB connection
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Failed to connect to SQLite database:', err.message);
    process.exit(1);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

// Create customers table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT,
    state TEXT,
    pincode TEXT
  )`,
  (err) => {
    if (err) {
      console.error('Failed to create customers table:', err.message);
    } else {
      console.log('✅ Customers table ready');
    }
  }
);

// POST route to create a new customer
app.post('/api/customers', (req, res) => {
  const { first_name, last_name, phone, city, state, pincode } = req.body;

  console.log('POST /api/customers body:', req.body);

  if (!first_name || !last_name || !phone) {
    return res.status(400).json({ error: 'Missing required fields: first_name, last_name, phone' });
  }

  const sql = `INSERT INTO customers (first_name, last_name, phone, city, state, pincode) VALUES (?, ?, ?, ?, ?, ?)`;
  const params = [first_name, last_name, phone, city || '', state || '', pincode || ''];

  db.run(sql, params, function (err) {
    if (err) {
      console.error('DB insert error:', err.message);
      return res.status(500).json({ error: 'Failed to create customer' });
    }
    res.status(201).json({ id: this.lastID, message: 'Customer created successfully' });
  });
});

// GET all customers
app.get('/api/customers', (req, res) => {
  db.all('SELECT * FROM customers ORDER BY id DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching customers:', err.message);
      return res.status(500).json({ error: 'Failed to fetch customers' });
    }
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
