app.post('/api/customers', (req, res) => {
  console.log('POST /api/customers - body:', req.body);

  const { first_name, last_name, phone, city, state, pincode } = req.body;

  if (!first_name || !last_name || !phone) {
    console.log('Validation failed: missing required fields');
    return res.status(400).json({ error: 'first_name, last_name, and phone are required' });
  }

  const sql = `INSERT INTO customers (first_name, last_name, phone, city, state, pincode) VALUES (?, ?, ?, ?, ?, ?)`;

  db.run(sql, [first_name, last_name, phone, city || '', state || '', pincode || ''], function(err) {
    if (err) {
      console.error('SQLite insert error:', err.message); // THIS will print detailed error on backend console
      return res.status(500).json({ error: 'Database error: ' + err.message });
    }
    console.log('Inserted customer with id:', this.lastID);
    res.status(201).json({ id: this.lastID, message: 'Customer created successfully' });
  });
});


