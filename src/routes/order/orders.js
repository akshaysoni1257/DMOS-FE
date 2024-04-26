import React, { useState, useEffect } from "react";
import axios from "axios";

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
            <h2>View Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.customer}</td>
                            <td>{order.items[0].product}</td>
                            <td>{order.items[0].quantity}</td>
                            <td>{order.items[0].totalPrice}</td>
                            <td>{order.status}</td>
                            <td>{new Date(order.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
