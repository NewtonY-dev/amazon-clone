import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Pages/Landing/Landing";
import SignUp from "../src/Pages/Auth/Signup";
import Payment from "../src/Pages/Payment/Payment";
import Orders from "../src/Pages/Orders/Orders";
import Cart from "../src/Pages/Cart/Cart";
import Results from '../src/Pages/Results/Results'
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
