exports.create = (req, res) => {
  console.log("Received customer data:", req.body);

  const { first_name, last_name, phone, city, state, pincode } = req.body;

  if (!first_name || !last_name || !phone) {
    return res.status(400).json({ error: "First Name, Last Name, and Phone are required" });
  }

  Customer.create({ first_name, last_name, phone, city, state, pincode }, (err, result) => {
    if (err) {
      console.error("Error creating customer:", err.message);
      return res.status(500).json({ error: "Database error: " + err.message });
    }
    res.status(201).json({ id: result.id, message: "Customer created successfully" });
  });
};
