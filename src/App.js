// import Routing from "./routing/routing"
// function App(){
//   return(
//   <div>
// <Routing />
//   </div>)
// }
// export default App;

import {
  BrowserRouter as Router,
  Switch,
 
  Route
} from "react-router-dom";

import Header from "./components/subcomponents/header/header"
import Navbar from "./components/subcomponents/navbar/navbar"
import Main from "./components/main"
import User from "./inde"
import Contact from "./components/subcomponents/otherstuffs/contactus"
import Item from "./components/subcomponents/otherstuffs/items"
import Login from "./components/subcomponents/otherstuffs/login"
import Product from "./components/subcomponents/otherstuffs/products"
import Signup from "./components/subcomponents/otherstuffs/signup"

function App(){

{/* <Link to="/login"><Login /></Link> */}

  return(

  

  <Router>
<Header />
<div class="two">
<Navbar />

<Switch>
  <Route exact path="/user">
<Main />
  </Route>
  <Route  path="/contact">
      <Contact />
  </Route>
  <Route  path="/item">
      <Item />
  </Route>
  <Route  path="/login">
      <Login />
  </Route>
  <Route  path="/product">
      <Product />
  </Route>
  <Route path="/signup">
      <Signup />
  </Route>
  {/* <Route  path="#">
      <User />
  </Route> */}
</Switch>

</div>
      </Router>

)
}

export default App;