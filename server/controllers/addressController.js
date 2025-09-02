const db = require('../db/db');

// Update address
exports.updateAddress = (req, res) => {
  const { address, city, state, pincode } = req.body;
  db.run(
    `UPDATE addresses SET address = ?, city = ?, state = ?, pincode = ? WHERE id = ?`,
    [address, city, state, pincode, req.params.addressId],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
};

// Delete address
exports.deleteAddress = (req, res) => {
  db.run(`DELETE FROM addresses WHERE id = ?`, [req.params.addressId], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
};
