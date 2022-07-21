import React from 'react'
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

function Riders(props) {

 const {cart, user, setUser} = {...props}

  return (
    <>
      <Header cart={cart} user={user} setUser={setUser} />
      <div>Matias Dominguesh, Rideeeeeeers</div>
      <Footer />
    </>
  )
}

export default Riders