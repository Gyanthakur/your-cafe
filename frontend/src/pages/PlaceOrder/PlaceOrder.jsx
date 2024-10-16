import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {


	const [payment_type , setPayment_type] = useState("stripe");

	const { getTotalCartAmount, token, food_list, cartItems, url } =
		useContext(StoreContext);
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		street: "",
		city: "",
		state: "",
		zipcode: "",
		country: "",
		phone: "",
	});

	const onChaneHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};

	const placeOrder = async (event) => {
		event.preventDefault();
		let orderItems = [];
		food_list.map((item) => {
			if (cartItems[item._id] > 0) {
				let itemInfo = item;
				itemInfo["quantity"] = cartItems[item._id];
				orderItems.push(itemInfo);
			}
		});
		// console.log(orderItems);
		let orderData = {
			address: data,
			items: orderItems,
			amount: getTotalCartAmount() + 2,
			payment_type: payment_type,
		};
		let response = await axios.post(url + "/api/order/place", orderData, {
			headers: { token },
		});
		if (response.data.success) {
			// const {session_url} = response.data;
			// window.location.replace(session_url);
			const { session_url } = response.data;
			const { redirect_url } = response.data;
			if (redirect_url) {
				window.location.replace(redirect_url);
			} else {
				window.location.replace(session_url);
			}
		} else {
			alert("Error");
			// console.log(response.data);
		}
	};
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/cart");
		} else if (getTotalCartAmount() === 0) {
			navigate("/cart");
			alert("Select atleast one Dish!");
		}
	}, [token]);

	//   useEffect(()=>{
	// 	console.log(data);
	//   },[data])

	return (
		<form onSubmit={placeOrder} className="place-order">
			<div className="place-order-left">
				<p className="title">Delivery Information</p>
				<div className="multi-fields">
					<input
						required
						name="firstName"
						onChange={onChaneHandler}
						value={data.firstName}
						type="text"
						placeholder="First Name"
					/>
					<input
						required
						name="lastName"
						onChange={onChaneHandler}
						value={data.lastName}
						type="text"
						placeholder="Last Name"
					/>
				</div>
				<input
					required
					name="email"
					onChange={onChaneHandler}
					value={data.email}
					type="email"
					placeholder="Email Address"
				/>
				<input
					required
					name="street"
					onChange={onChaneHandler}
					value={data.street}
					type="text"
					placeholder="Street"
				/>
				<div className="multi-fields">
					<input
						required
						name="city"
						onChange={onChaneHandler}
						value={data.city}
						type="text"
						placeholder="City"
					/>
					<input
						required
						name="state"
						onChange={onChaneHandler}
						value={data.state}
						type="text"
						placeholder="State"
					/>
				</div>
				<div className="multi-fields">
					<input
						required
						name="zipcode"
						onChange={onChaneHandler}
						value={data.zipcode}
						type="text"
						placeholder="zip code"
					/>
					<input
						required
						name="country"
						onChange={onChaneHandler}
						value={data.country}
						type="text"
						placeholder="Country"
					/>
				</div>
				<input
					required
					name="phone"
					onChange={onChaneHandler}
					value={data.phone}
					type="tel"
					placeholder="Phone"
				/>
			</div>

			<div className="place-order-right">
				<div className="cart-total">
					<h2>Cart Totals</h2>
					<div>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>
								${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
							</b>
						</div>

					</div>
					<div className='payment-type' >
              <label onClick={() => setPayment_type("cod")}>
                <input name="payment-type" type="radio" />
                <span class="custom-radio"></span> 
                COD (Cash on delivery)
              </label>
              <label onClick={() => setPayment_type("stripe")}>
                <input name="payment-type" type="radio" defaultChecked />
                <span class="custom-radio"></span> 
                Stripe (Credit/Debit)
              </label>
              </div>
					<button type="submit">PROCEED TO PAYMENT</button>
				</div>
			</div>
		</form>
	);
};
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
export default PlaceOrder;
