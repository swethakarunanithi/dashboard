import React from "react";
import "./CustomerList.css";

const CustomerList = () => {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    { id: 4, name: "Alice Brown", email: "alice.brown@example.com" },
    { id: 5, name: "Charlie Wilson", email: "charlie.wilson@example.com" },
    { id: 6, name: "Emily Davis", email: "emily.davis@example.com" },
    { id: 7, name: "Michael Clark", email: "michael.clark@example.com" },
    { id: 8, name: "Sophia Martinez", email: "sophia.martinez@example.com" },
    { id: 9, name: "David Lopez", email: "david.lopez@example.com" },
    { id: 10, name: "Olivia Taylor", email: "olivia.taylor@example.com" },
  ];

  return (
    <div className="customer-list-container">
      <h2 className="title">Customer List</h2>
      <div className="table-card">
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
