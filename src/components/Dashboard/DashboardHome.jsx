import React from "react";
import "./DashboardHome.css";

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <h1>Dashboard Overview</h1>
      <div className="widgets">
        <div className="widget">📦 Total Orders: 120</div>
        <div className="widget">💰 Revenue: $12,000</div>
        <div className="widget">👥 Customers: 45</div>
        <div className="widget">🍽️ Products: 32</div>
      </div>
    </div>
  );
};

export default DashboardHome;
