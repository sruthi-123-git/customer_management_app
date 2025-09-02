import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api/api';

const CustomerForm = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      API.get(`/customers/${id}`).then((res) => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      API.put(`/customers/${id}`, form).then(() => navigate('/'));
    } else {
      API.post('/customers', form).then(() => navigate('/'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" />
      <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="phone_number" value={form.phone_number} onChange={handleChange} placeholder="Phone Number" />
      <button type="submit">{id ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default CustomerForm;
