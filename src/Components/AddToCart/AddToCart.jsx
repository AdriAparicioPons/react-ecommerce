import React from "react";

function AddToCart({ cart, cartAdd, prod, shoppingCart, id, quantity }) {

  const addItemToLocalStorage = () => {
    let index = cart.findIndex((element) => element.id === prod.id);
    
    if( index !== -1 ) {
      const items = cart.map((item) => {
        if( item.id === id ) {
          item.quantity = item.quantity + 1;
        }
        return item;
      })
      cartAdd(items);
    }else{
    cartAdd([ 
      ...cart,
      {
        ...shoppingCart.find(prevState => prevState.id === id)
      }
    ])
  }
  
  };
  return (
    <>
      <button className="btn btn-success" onClick={addItemToLocalStorage}>
        🛒
      </button>
    </>
  );
}

export default AddToCart;
