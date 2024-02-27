import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [orderlines, setOrderlines] = useState([]);
  const [filteredOrderlines, setFilteredOrderlines] = useState([]);
  const [quantityFilter, setQuantityFilter] = useState('');

  // Mock data for demonstration
  const mockOrderlines = [
    { OrderLineID: 1, OrderID: 101, UserID: 1, PackageTypeID: 1, Quantity: 10 },
    { OrderLineID: 2, OrderID: 101, UserID: 2, PackageTypeID: 2, Quantity: 20 },
    { OrderLineID: 3, OrderID: 102, UserID: 1, PackageTypeID: 3, Quantity: 15 },
    // More mock data...
  ];

  useEffect(() => {
    // Simulate fetching orderlines from API
    // Replace this with actual API call
    setOrderlines(mockOrderlines);
    setFilteredOrderlines(mockOrderlines);
  }, []);

  useEffect(() => {
    // Filter orderlines by quantity when quantityFilter changes
    if (quantityFilter === '') {
      setFilteredOrderlines(orderlines);
    } else {
      const filtered = orderlines.filter(orderline => orderline.Quantity === parseInt(quantityFilter));
      setFilteredOrderlines(filtered);
    }
  }, [quantityFilter, orderlines]);

  const handleQuantityFilterChange = (e) => {
    setQuantityFilter(e.target.value);
  };

  const renderOrderlines = () => {
    return filteredOrderlines.map(orderline => (
      <tr key={orderline.OrderLineID}>
        <td>{orderline.OrderLineID}</td>
        <td>{orderline.OrderID}</td>
        <td>{orderline.UserID}</td>
        <td>{orderline.PackageTypeID}</td>
        <td>{orderline.Quantity}</td>
      </tr>
    ));
  };

  return (
    <div className="App">
      <h1>Orderlines</h1>
      <label>Filter by Quantity: </label>
      <input type="text" value={quantityFilter} onChange={handleQuantityFilterChange} />
      <table>
        <thead>
          <tr>
            <th>OrderLineID</th>
            <th>OrderID</th>
            <th>UserID</th>
            <th>PackageTypeID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {renderOrderlines()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
