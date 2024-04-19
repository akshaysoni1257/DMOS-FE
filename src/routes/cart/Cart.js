import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import ChangeItemQuantity from "./ChangeItemQuantity";
import EmptyCart from "./EmptyCart";

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
