import React from "react";

function Header({ setSearchTerm }) {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Customer Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-3 py-1 rounded-md"
      />
    </div>
  );
}

export default Header;
