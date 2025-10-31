import React from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import CustomerList from "./CustomerList";
import OrdersList from "./OrdersList";
import ProductsList from "./ProductsList";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="products" element={<ProductsList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
