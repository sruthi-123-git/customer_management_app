import React from 'react';
import { useParams } from 'react-router-dom';
import AddressList from '../components/AddressList';

function CustomerDetailPage() {
  const { id } = useParams();

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, `Customer ID: ${id}`),
    React.createElement(AddressList, { customerId: id })
  );
}

export default CustomerDetailPage;
