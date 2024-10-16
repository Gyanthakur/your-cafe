import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
	const [showLogin, setShowlogin] = useState(false);
	return (
		<>
			{showLogin?<LoginPopup setShowlogin={setShowlogin} />:<></>}
			<div className="app">
				<Navbar setShowlogin={setShowlogin} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/order" element={<PlaceOrder />} />
					<Route path="/verify" element={<Verify />} />
					<Route path="/myorders" element={<MyOrders />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;
