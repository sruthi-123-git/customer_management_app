import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5001/api/customers')
      .then(res => setCustomers(res.data))
      .catch(err => console.error(err));
  }, []);

  return React.createElement(
    'table',
    { border: '1', cellPadding: '10', cellSpacing: '0' , margin: '10'},
    React.createElement('thead', null,
      React.createElement('tr', null,
        React.createElement('th', null, 'Name'),
        React.createElement('th', null, 'Phone'),
        React.createElement('th', null, 'Actions')
      )
    ),
    React.createElement('tbody', null,
      customers.map(c => React.createElement('tr', { key: c.id },
        React.createElement('td', null, `${c.first_name} ${c.last_name}`),
        React.createElement('td', null, c.phone),
        React.createElement('td', null,
          React.createElement('button', { onClick: () => navigate(`/customers/${c.id}`) }, 'View'),
          ' ',
          React.createElement('button', { onClick: () => navigate(`/customers/edit/${c.id}`) }, 'Edit')
        )
      ))
    )
  );
}

export default CustomerList;
