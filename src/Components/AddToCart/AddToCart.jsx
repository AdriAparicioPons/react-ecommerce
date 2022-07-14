import React from 'react'


function AddToCart({cart, cartAdd, prod}) {


  const addItemToLocalStorage = () => {
    console.log(cart)
      cart.find((element) => element.id === prod.id) ? prod.quantity += 1 : cartAdd(...cart, prod);
      
    console.log("hell ",cart)  
    }
  return (
    <>
    <button className="btn btn-success" onClick={addItemToLocalStorage}>🛒</button>
    </>

  )
}

export default AddToCart