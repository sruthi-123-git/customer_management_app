import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import CustomerListPage from './pages/CustomerListPage'; // Your other pages
import CustomerDetailPage from './pages/CustomerDetailPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Customer List</Link> |{" "}<br/><hr/>
        <Link to="/add-customer">Add Customer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CustomerListPage />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/customer/:id" element={<CustomerDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

