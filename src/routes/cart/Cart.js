import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import ChangeItemQuantity from "./ChangeItemQuantity";
import EmptyCart from "./EmptyCart";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
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
    setCartTotal(response.data.carttotal);
    setCartItems(response.data?.items);
  };
  // Cart Items
  const removeCartAllItems = async () => {
    await axios.delete("http://localhost:3001/customer/cart/clear-Cart", {
      headers: {
        Authorization: `Bearer ${gettoken}`,
      },
    });
    toast.success("Cart Cleared successfully!")
    getCartItems()
  };

  const removePerticularItem=async(id)=>{
    await axios.delete(`http://localhost:3001/customer/cart/delete-cart/${id}`,
    {
      headers: {
        Authorization: `Bearer ${gettoken}`,
      },
    }
    )
    getCartItems()
    toast.success("Item removed successfully!")

  }
  useEffect(() => {
    getCartItems();
  }, []);

  const handleAddProduct = async (id, quantity) => {
    await axios.put(
      `http://localhost:3001/customer/cart/update-cart/${id}`,
      {
        quantity: quantity + 1,
      },
      {
        headers: {
          Authorization: `Bearer ${gettoken}`,
        },
      }
    );
    getCartItems();
    // setCartItems(response.data.items);
  };
  const handleRemoveProduct = async (id, quantity) => {
    await axios.put(
      `http://localhost:3001/customer/cart/update-cart/${id}`,
      {
        quantity: quantity - 1,
      },
      {
        headers: {
          Authorization: `Bearer ${gettoken}`,
        },
      }
    );
    getCartItems();
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
                    <th style={{ width: "70px" }}>Action </th>
                    <th style={{ width: "550px" }}> Product </th>
                    <th style={{ width: "200px" }}> Quantity </th>
                    <th style={{ width: "200px" }}> Total </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((cartItem, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <i onClick={()=>removePerticularItem(cartItem.product._id)} class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </td>
                        <td>
                          <div className="product_wrap">
                            <img
                              src={cartItem.product.img}
                              alt={cartItem.name}
                            />
                            <div className="product_details">
                              <h6> {cartItem.product.name} </h6>
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
                                handleAddProduct(
                                  cartItem.product._id,
                                  cartItem.quantity
                                )
                              }
                              handleRemoveProduct={() =>
                                handleRemoveProduct(
                                  cartItem.product._id,
                                  cartItem.quantity
                                )
                              }
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

              <button
                onClick={() => removeCartAllItems()}
                className="active-button-style link_btn"
              >
                Remove all items from the cart
              </button>
              <div className="payment_details">
                <h3> Total Payable Amount </h3>
                <h3> {cartTotal} </h3>
                <div className="button_wrap">
                  <a
                    aria-current="page"
                    class="cart-btn active-button-style txt-white active"
                  >
                    <p>Checkout</p>
                  </a>
                  <a
                    aria-current="page"
                    class="passive-button-style txt-white"
                    href="/menu"
                    style={{}}
                  >
                    <p>Back to Menu</p>
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}

        {/* New Code Jenil End */}

        {/* {cartItems?.length === 0 ? (
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
              className="cart-clear-btn"
            >
              remove all items from the cart
            </button>
          </React.Fragment>
        )} */}
      </article>
      <ScrollBtn />
    </main>
  );
};

export default Cart;
