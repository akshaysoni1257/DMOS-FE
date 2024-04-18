import React from "react";
import { Link } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";
import Table from 'react-bootstrap/Table'

const EmptyCart = () => {
  return (
    <React.Fragment>

      
      <div className="cart_table col-md-6">
        <Table>
            <thead>
              <tr>
                <th style={{width: "70px" }}>Action </th>
                <th style={{width: "550px" }}> Product </th>
                <th style={{width: "200px" }}> Quantity </th>
                <th style={{width: "200px" }}> Total </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td> <i class="fa fa-trash" aria-hidden="true"></i> </td>
                  <td> 
                    <div className="product_wrap">
                        <img src="https://www.dominos.co.in/files/items/Margherit.jpg" />
                        <div className="product_details">
                            <h6> Cheese N Corn </h6>
                            <label> Rs. 360 </label>
                        </div>
                    </div>
                  </td>
                  <td> 
                    <div className="quantity">
                      <button> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                        <label> 2 </label>
                      <button> <i class="fa fa-minus" aria-hidden="true"></i> </button>
                    </div> 
                  </td>
                  <td> Rs. 720 </td>
                </tr>
            </tbody>
        </Table>
        <div className="payment_details">
            <h3> Total Payable Amount </h3>
            <h3> Rs. 720 </h3>
            <div className="button_wrap">
              <a aria-current="page" class="cart-btn active-button-style txt-white active"><p>Checkout</p></a>
              <a aria-current="page" class="passive-button-style txt-white" href="/menu" style={{  }}><p>Back to Menu</p></a>
            </div>
        </div>
      </div>
        


    <div className="empty_cart">
      <h3>Oh, no, your cart is empty</h3>
      <p>Seems like you have not added anything to your cart yet.</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
        Explore menu
      </Link>
    </div>
      
    </React.Fragment>
  );
}

export default EmptyCart;
