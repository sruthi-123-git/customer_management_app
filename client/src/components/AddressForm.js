import React, { useState } from 'react';
import axios from 'axios';

function AddressForm({ customerId, onAddressAdded }) {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    pincode: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`http://localhost:5000/api/customers/${customerId}/addresses`, address)
      .then(res => {
        alert('Address saved successfully');
        setAddress({ street: '', city: '', state: '', pincode: '' });
        if (onAddressAdded) onAddressAdded();
      })
      .catch(err => {
        console.error('Error saving address:', err);
        alert('Error saving address');
      });
  }

  return React.createElement('form', { onSubmit: handleSubmit }, 
    React.createElement('input', {
      name: 'street',
      value: address.street,
      onChange: handleChange,
      placeholder: 'Street',
      required: true,
    }),
    React.createElement('input', {
      name: 'city',
      value: address.city,
      onChange: handleChange,
      placeholder: 'City',
      required: true,
    }),
    React.createElement('input', {
      name: 'state',
      value: address.state,
      onChange: handleChange,
      placeholder: 'State',
    }),
    React.createElement('input', {
      name: 'pincode',
      value: address.pincode,
      onChange: handleChange,
      placeholder: 'Pincode',
    }),
    React.createElement('button', { type: 'submit' }, 'Save Address')
  );
}

export default AddressForm;
