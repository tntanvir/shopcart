import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import { Menu } from "./Component/Menu"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./Component/Shop";
import ItemDtl from "./Component/ItemDtl";
import { Footer } from "./Component/Footer";
import ShopingCart from "./Component/ShopingCart";
import { createContext } from 'react';
import { useState } from "react";
import Private from "./Component/Privates/Private";
import AuthLog from "./Component/Firebase/AuthLog";
import Payment from "./Component/Payment";

export const contextAPI = createContext();

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  const [userLogin, setUserLogin] = useState([]);
  return (
    <>
      <contextAPI.Provider value={{ cartItem, setCartItem, userLogin, setUserLogin }}>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<ItemDtl />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/login" element={<AuthLog />} />
            <Route path="/payment" element={<Payment />} />


            <Route
              path="/cart"
              element={
                <Private childern={<ShopingCart />} />
              }
            />
          </Routes>
          <Footer />
        </Router>
      </contextAPI.Provider>
    </>
  )
}

export default App