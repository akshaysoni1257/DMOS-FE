import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import ChangeItemQuantity from "./ChangeItemQuantity";
import EmptyCart from "./EmptyCart";
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const gettoken = localStorage.getItem("token");
  const getCartItems = async () => {
    const response = await axios.get(
      "http://localhost:3001/customer/cart/view-cart",
      {
        headers: {
          Authorization: `Bearer ${gettoken}`,
        },
      }
    );
    setCartItems(response.data?.items);
  };
  useEffect(() => {
    getCartItems();
  }, []);

  const handleAddProduct = async (id,quantity) => {
    await axios.put(
      `http://localhost:3001/customer/cart/update-cart/${id}`,
      {
        quantity: quantity+1,
      },
      {
        headers: {
          Authorization: `Bearer ${gettoken}`,
        },
      }
    );
    getCartItems()
    // setCartItems(response.data.items);
  };
  const handleRemoveProduct = async (id,quantity) => {
    await axios.put(
      `http://localhost:3001/customer/cart/update-cart/${id}`,
      {
        quantity: quantity-1,
      },
      {
        headers: {
          Authorization: `Bearer ${gettoken}`,
        },
      }
    );
    getCartItems()
    // setCartItems(response.data.items);
  };
  useEffect(() => {
    document.title = "Shopping Cart | Pizza Time";
  }, []);
  return (
    <main className="cart">
      <h2>Shopping cart</h2>

      <article className="cart-content">


        {/* New Code Jenil Start */}
        {cartItems?.length === 0 ? (
          <EmptyCart />
        ) : (
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
                      <tbody >
                      {cartItems?.map((cartItem, index) => {
                        console.log(cartItem);
                          return (
                          <tr key={index}>
                            <td> <i class="fa fa-trash" aria-hidden="true"></i> </td>
                            <td> 
                              <div className="product_wrap">
                                  <img src={cartItem.product.img} alt={cartItem.name} />
                                  <div className="product_details">
                                      <h6> {cartItem.product.name}{" "} </h6>
                                  </div>
                              </div>
                            </td>
                            <td> 
                              <div className="quantity">
                                {/* <button> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                                  <label> 2 </label>
                                <button> <i class="fa fa-minus" aria-hidden="true"></i> </button> */}
                                <ChangeItemQuantity
                                  handleAddProduct={() =>
                                    handleAddProduct(cartItem.product._id,cartItem.quantity)
                                  }
                                  handleRemoveProduct={()=>handleRemoveProduct(cartItem.product._id,cartItem.quantity)}
                                  cartItem={cartItem}
                                />
                              </div> 
                            </td>
                            <td> Rs.{cartItem.totalPrice} </td>
                          </tr>
                        );
                        })}
                      </tbody>
                  </Table>

                  <Link className="active-button-style link_btn" to="">
                      Remove all items from the cart
                  </Link>
                  <div className="payment_details">
                      <h3> Total Payable Amount </h3>
                      <h3> Rs. 720 </h3>
                      <div className="button_wrap">
                        <a aria-current="page" class="cart-btn active-button-style txt-white active"><p>Checkout</p></a>
                        <a aria-current="page" class="passive-button-style txt-white" href="/menu" style={{  }}><p>Back to Menu</p></a>
                      </div>
                  </div>
                </div>

               

                {/* Empty Cart Start */}
                <div className="empty_cart">
                  <h3>Oh, no, your cart is empty</h3>
                  <p>Seems like you have not added anything to your cart yet.</p>
                  <Link to="/menu" className="active-button-style">
                    Explore menu
                  </Link>
                </div>
                {/* Empty Cart End */}
              

          </React.Fragment>
        )}

        {/* New Code Jenil End */}



        {cartItems?.length === 0 ? (
          <EmptyCart />
        ) : (
          <React.Fragment>
            {cartItems?.map((cartItem, index) => {
              console.log(cartItem);
              return (
                <section className="cart-item" key={index}>
                  <img src={cartItem.product.img} alt={cartItem.name} />
                  <section className="cart-item-content">
                    <section className="cart-item-info">
                      <h3 className="cart-item-title">
                        {cartItem.product.name},{" "}
                        {/* {cartItem.userSelectedAttributes.map((i, index) => {
                        return <span key={index}>{i.attributeValue}</span>;
                      })} */}
                      </h3>

                      <p className="cart-item-ingredients">
                        {cartItem.ItemIngredients}
                      </p>
                    </section>

                    <section className="cart-item-interaction">
                      <ChangeItemQuantity
                        handleAddProduct={() =>
                          handleAddProduct(cartItem.product._id,cartItem.quantity)
                        }
                        handleRemoveProduct={()=>handleRemoveProduct(cartItem.product._id,cartItem.quantity)}
                        cartItem={cartItem}
                      />

                      <p className="cart-item-price">
                      ₹{cartItem.totalPrice}
                      </p>
                    </section>
                  </section>
                </section>
              );
            })}
            <button
              //  onClick={clearCart}
              className="cart-clear-btn"
            >
              remove all items from the cart
            </button>
            {/* {cartTotals} */}
          </React.Fragment>
        )}


      </article>
      <ScrollBtn />
    </main>
  );
};

export default Cart;
