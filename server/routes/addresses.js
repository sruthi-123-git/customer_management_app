const express = require('express');
const router = express.Router();
const db = require('../db/db'); // Adjust path based on your structure

// Add a new address for a customer
router.post('/customers/:id/addresses', (req, res) => {
  const customerId = req.params.id;
  const { street, city, state, pincode } = req.body;

  if (!street) {
    return res.status(400).json({ error: 'Street is required' });
  }

  const sql = `INSERT INTO addresses (customer_id, street, city, state, pincode)
               VALUES (?, ?, ?, ?, ?)`;
  const params = [customerId, street, city, state, pincode];

  db.run(sql, params, function (err) {
    if (err) {
      console.error('Error inserting address:', err.message);
      return res.status(500).json({ error: 'Failed to add address' });
    }
    res.status(201).json({ id: this.lastID });
  });
});

module.exports = router;

