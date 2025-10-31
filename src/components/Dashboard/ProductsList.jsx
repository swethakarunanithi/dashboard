import React from "react";
import { food_list } from "../../assets/assets";

const ProductsList = () => {
  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Category</th><th>Price</th></tr>
        </thead>
        <tbody>
          {food_list.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
