import React from "react";
import "./OrderList.css";

const OrdersList = () => {
  const orders = [
    { id: 1, customer: "John Doe", total: "Rs.100", status: "Shipped" },
    { id: 2, customer: "Jane Smith", total: "Rs.200", status: "Pending" },
    { id: 3, customer: "Bob Johnson", total: "Rs.150", status: "Delivered" },
    { id: 4, customer: "Alice Brown", total: "Rs.90", status: "Cancelled" },
    { id: 5, customer: "Charlie Wilson", total: "Rs.250", status: "Processing" },
    { id: 6, customer: "Emily Davis", total: "Rs.300", status: "Delivered" },
    { id: 7, customer: "Michael Clark", total: "Rs.120", status: "Shipped" },
    { id: 8, customer: "Sophia Martinez", total: "Rs.180", status: "Pending" },
    { id: 9, customer: "David Lopez", total: "Rs.220", status: "Processing" },
    { id: 10, customer: "Olivia Taylor", total: "Rs.175", status: "Delivered" },
  ];

  return (
    <div className="orders-container">
      <h2 className="orders-title">Orders List</h2>
      <div className="orders-table-card">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.total}</td>
                <td>
                  <span className={`status ${o.status.toLowerCase()}`}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
