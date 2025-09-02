import React from 'react';
import CustomerList from '../components/CustomerList';
import { useNavigate } from 'react-router-dom';

function CustomerListPage() {
  const navigate = useNavigate();

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Customer List'),
    React.createElement('button', { onClick: () => navigate('/customers/new') }, 'Add Customer'),
    React.createElement(CustomerList)
  );
}

export default CustomerListPage;

