import React from "react";

const ChangeItemQuantity = ({ handleAddProduct, handleRemoveProduct, cartItem }) => {
  return (

    <div className="main_div">
      <button onClick={() => {handleAddProduct(cartItem.product, cartItem.userSelectedAttributes);}}> 
        <i class="fa fa-plus" aria-hidden="true"></i> 
      </button>
      <label> {cartItem?.quantity} </label>
      <button onClick={() => {handleRemoveProduct(cartItem.product, cartItem.userSelectedAttributes);}}>
        <i class="fa fa-minus" aria-hidden="true"></i>
      </button>
    </div>
    



    // <section className="cart-item-add-qty">
    //   <button
    //     onClick={() => {
    //       handleAddProduct(cartItem.product, cartItem.userSelectedAttributes);
    //     }}
    //   >
    //     +
    //   </button>
    //   <p>{cartItem?.quantity}</p>
    //   <button
    //     onClick={() => {
    //       handleRemoveProduct(cartItem.product, cartItem.userSelectedAttributes);
    //     }}
    //   >
    //     -
    //   </button>
    // </section>
  );
}

export default ChangeItemQuantity;
