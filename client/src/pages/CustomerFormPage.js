import React from 'react';
import CustomerForm from '../components/CustomerForm';
import { useParams } from 'react-router-dom';

function CustomerFormPage() {
  const { id } = useParams();

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, id ? 'Edit Customer' : 'Add Customer'),
    React.createElement(CustomerForm, { customerId: id })
  );
}

export default CustomerFormPage;
