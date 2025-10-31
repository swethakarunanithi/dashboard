import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <NavLink to="/dashboard" end>Home</NavLink>
        <NavLink to="/dashboard/customers">Customers</NavLink>
        <NavLink to="/dashboard/orders">Orders</NavLink>
        <NavLink to="/dashboard/products">Products</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
