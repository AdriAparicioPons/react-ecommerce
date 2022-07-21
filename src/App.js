import  Body from "./Components/Body/Body"
import Header from "./Components/Header/Header"
import LoginForm from "./Components/LoginForm/LoginForm"
import {useEffect, useState} from "react"
import Footer from "./Components/Footer/Footer"
// import RouterPath from "./Router/RouterPath"





const App =() => {
  const [cart, cartAdd] = useState(JSON.parse(localStorage.getItem("cart")) || []);


useEffect(()=>{
  localStorage.setItem("cart", [JSON.stringify(cart)]);
},[cart])

const adminUser = {
  email: 'admin@mati.com',
  password: 'kebab'
}
const [user, setUser] = useState({name: "", email:"", password:""})
const [error, setError] = useState("");

const Login = details => {
  console.log(details);
  if (details.email ==adminUser.email && details.password == adminUser.password) {
    console.log("Estamos dentro Socio");
    setUser({
      name:details.name,
      email:details.email,
      password:details.password
    })
  }else{
    console.log("vuelve a intentarlo crack");
    setError(<div class="alert alert-danger" role="alert">
    Credentials do not match! Please try again
  </div>)
  }
}
//  const Logout = () => {
//   setUser({name: "", email:""});
// }

  return (
   
    <div className="App">
      {(user.email !="") ?(
        <div>
      <Header cart={cart} user={user} setUser={setUser}/>      
      <Body  cart={cart} cartAdd={cartAdd}/>
      <Footer/>
      </div>
      ):(
        <LoginForm Login={Login} error={error}/>
        )}
    </div>
        
  )
}

export default App;
