import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";


const gettoken = localStorage.getItem("token");
const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/customer/order/view-orders",{
            headers: {
                Authorization: `Bearer ${gettoken}`,
              },
        })
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error("Error fetching orders:", error);
            });
    }, []);

    return (
        <div className='data-order'>
            
            <div className="cart_table">
                <div className="order_details">
                    <h2>Orders Details</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            {/* <th>Order ID</th> */}
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            {/* <th>Created At</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                {/* <td>{order._id}</td> */}
                                <td>{order.customer}</td>
                                <td>{order.items[0].product}</td>
                                <td>{order.items[0].quantity}</td>
                                <td>{order.items[0].totalPrice}</td>
                                <td>{order.status}</td>
                                {/* <td>{new Date(order.createdAt).toLocaleString()}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button_wrap">
                  <a
                    aria-current="page"
                    class="cart-btn active-button-style txt-white active"
                    href="/menu"
                  >
                    <p>Back to Menu</p>
                  </a>
                </div>
            </div>
        </div>
    );
};

export default Orders;
