import React, { useState, useEffect } from "react";
import axios from "axios";
import './orders.css'; // Import your CSS file

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const gettoken = localStorage.getItem("token");
        if (!gettoken) {
          // User not logged in
          setAuthenticated(false);
          return;
        }

        const response = await axios.get("http://localhost:3001/customer/order/view-orders", {
          headers: {
            Authorization: `Bearer ${gettoken}`,
          },
        });
        setOrders(response.data);
        setAuthenticated(true);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    getOrders();
  }, []);

  if (!authenticated) {
    return <div style={{ color: 'white', textAlign: 'center' }}>Please log in to view orders</div>;
  }

  return (
    <div className="order_details">
      <h2><span>Order Details</span></h2>
      <div className="cart_table">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              order.items.map((item, index) => (
                <tr key={index}>
                  <td className="customer-data">{order.customer.first_name}</td>
                  <td className="product-data">{item.product.name}</td>
                  <td className="quantity-data">{item.quantity}</td>
                  <td className="total-price-data">{item.totalPrice}</td>
                  <td className="status-data">{order.status}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
