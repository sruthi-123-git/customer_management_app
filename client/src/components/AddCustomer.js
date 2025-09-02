import React, { useState } from 'react';
import axios from '../api/api';

function AddCustomer() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/customers', formData);
      alert('Customer added! ID: ' + res.data.id);
    } catch (err) {
      alert('Error adding customer: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="first_name" placeholder="First Name" onChange={handleChange} value={formData.first_name} required /><br/><br/>
      <input name="last_name" placeholder="Last Name" onChange={handleChange} value={formData.last_name} required /><br/><br/>
      <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required /><br/><br/>
      <input name="city" placeholder="City" onChange={handleChange} value={formData.city} /><br/><br/>
      <input name="state" placeholder="State" onChange={handleChange} value={formData.state} /><br/><br/>
      <input name="pincode" placeholder="Pincode" onChange={handleChange} value={formData.pincode} /><br/><br/>
      <button type="submit">Add Customer</button>
    </form>
  );
}

export default AddCustomer;
