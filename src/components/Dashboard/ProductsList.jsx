import React from "react";
import { food_list } from "../../assets/assets";
import "./ProductList.css";

const ProductsList = () => {
  return (
    <div className="products-container">
      <h2 className="products-title">Product List</h2>
      <div className="table-card">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {food_list.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>Rs.{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
