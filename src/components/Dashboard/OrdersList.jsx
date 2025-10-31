import React from "react";

const OrdersList = () => {
  const orders = [
    { id: 1, customer: "John Doe", total: "$100", status: "Shipped" },
    { id: 2, customer: "Jane Smith", total: "$200", status: "Pending" },
    { id: 3, customer: "Bob Johnson", total: "$150", status: "Delivered" },
  ];

  return (
    <div>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Customer</th><th>Total</th><th>Status</th></tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
