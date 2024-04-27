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
    return <div style={{ color: 'white', textAlign: 'center' , fontSize:'50px', marginTop:'50px'}}>Orders
    <br></br>Oh, no, your orders is empty<br></br><p style={{fontSize:'20px', marginTop:'30px'}}>please login to see your orders</p>
   </div>;
  }

  return (
    <div className="data-order">
      <h2><span style={{ color: 'white', textAlign: 'center' }}>View Orders</span></h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th className="customer-header">Customer</th>
            <th className="product-header">Product</th>
            <th className="quantity-header">Quantity</th>
            <th className="total-price-header">Total Price</th>
            <th className="status-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            order.items.map((item, index) => (
              <tr key={index}>
                <td className="customer-data" style={{ color: 'white'}}>{order.customer.first_name}</td>
                <td className="product-data" style={{ color: 'white'}}>{item.product.name}</td>
                <td className="quantity-data" style={{ color: 'white'}}>{item.quantity}</td>
                <td className="total-price-data" style={{ color: 'white'}}>{item.totalPrice}</td>
                <td className="status-data" style={{ color: 'white'}}>{order.status}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
