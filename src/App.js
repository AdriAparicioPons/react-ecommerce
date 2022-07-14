import  Body from "./Components/Body/Body"
import Header from "./Components/Header/Header"
import {useEffect, useState} from "react"





const App =() => {
  const [cart, cartAdd] = useState(JSON.parse(localStorage.getItem("cart")) || []);


useEffect(()=>{
  localStorage.setItem("cart", JSON.stringify(cart));
},[cart])

  return (
    <div className="App">
      <Header cart={cart}/>      
      <Body  cart={cart} cartAdd={cartAdd}/>
    </div>
  );
}

export default App;
