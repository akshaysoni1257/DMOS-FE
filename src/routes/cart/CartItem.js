import React from "react";
import Table from 'react-bootstrap/Table'
//components
import ChangeItemQuantity from "./ChangeItemQuantity";




// const CartItem = () => {
//   return (
//     <React.Fragment>  
//       <section className="card_details">
//         <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th style={{width: "70px" }}>No.</th>
//                 <th>Category Name</th>
//                 <th style={{width: "200px" }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                   <td>werhh</td>
//                   <td>werg </td>
//                   <td>
//                     {' '}
//                     <div className='icon_wrap'>
//                       <button className='edit' title='Edit' > <i class="fa fa-edit"></i> Edit </button>
//                       <button className='delete' title='Delete'> <i class="fa fa-trash"></i> Delete </button>
//                     </div>
//                   </td>
//                 </tr>
//             </tbody>
//         </Table>
//       </section>
//     </React.Fragment>
//   );
// }




const CartItem = ({
  handleAddProduct,
  handleRemoveProduct,
  clearCart,
  cartItems, cartTotals }) => {
  return (
    <React.Fragment>
      {cartItems.map((cartItem, index) => {
        return (
          <section className="cart-item" key={index}>
            <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
            <section className="cart-item-content">
              <section className="cart-item-info">
                {cartItem.userSelectedAttributes.length === 0 ? (
                  <h3 className="cart-item-title">{cartItem.ItemName}</h3>
                ) : (
                  <h3 className="cart-item-title">
                    {cartItem.ItemName},{" "}
                    {cartItem.userSelectedAttributes.map((i, index) => {
                      return <span key={index}>{i.attributeValue}</span>;
                    })}
                  </h3>
                )}
                <p className="cart-item-ingredients">{cartItem.ItemIngredients}</p>
              </section>

              <section className="cart-item-interaction">
                <ChangeItemQuantity
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  cartItem={cartItem}
                />

                <p className="cart-item-price">${cartItem.ItemPrice}</p>
              </section>
            </section>
          </section>
        );
      })
      }
      <button onClick={clearCart} className="cart-clear-btn">
        remove all items from the cart
      </button>
      {cartTotals}
    </React.Fragment>
  );
}



export default CartItem;