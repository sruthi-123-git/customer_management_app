import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import AddressForm from './AddressForm';

function AddressList(props) {
  const customerId = props.customerId;
  const [addresses, setAddresses] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchAddresses = useCallback(() => {
    axios
      .get(`http://localhost:5000/api/customers/${customerId}/addresses`)
      .then((res) => {
        setAddresses(res.data);
      })
      .catch((err) => {
        console.error('Error fetching addresses:', err);
      });
  }, [customerId]);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  function handleEdit(id) {
    setEditingId(id);
  }

  function handleUpdate() {
    setEditingId(null);
    fetchAddresses(); // Refresh after update
  }

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Addresses'),
    addresses.map(function (address) {
      return React.createElement(
        'div',
        { key: address.id },
        editingId === address.id
          ? React.createElement(AddressForm, {
              address: address,
              customerId: customerId,
              onSave: handleUpdate,
            })
          : React.createElement(
              'div',
              null,
              React.createElement(
                'p',
                null,
                `${address.address}, ${address.city}, ${address.state}, ${address.pincode}`
              ),
              React.createElement(
                'button',
                { onClick: function () { handleEdit(address.id); } },
                'Edit'
              )
            )
      );
    }),
    React.createElement(AddressForm, { customerId: customerId, onSave: handleUpdate })
  );
}

export default AddressList;
