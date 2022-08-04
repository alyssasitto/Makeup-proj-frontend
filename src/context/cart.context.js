import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./auth.context";

const CartContext = createContext();

function CartProviderWrapper(props) {
	const [cartArray, setCartArray] = useState([]);
	const { user, isLoggedIn } = useContext(AuthContext);

	const API_URL = process.env.REACT_APP_FAKE_API_URL;

	useEffect(() => {
		if (isLoggedIn) {
			const cartData = localStorage.getItem(`cart_${user._id}`);
			setCartArray(JSON.parse(cartData));
		} else {
			setCartArray([]);
		}
	}, [user, isLoggedIn]);

	const addToCart = (cartItem) => {
		const newCartState = [...cartArray, cartItem];
		localStorage.setItem(`cart_${user._id}`, JSON.stringify(newCartState));
		setCartArray(newCartState);
	};

	// useEffect(() => {
	// 	axios
	// 		.get(API_URL)
	// 		.then((makeupData) => {
	// 			setMakeupList(makeupData.data);
	// 		})
	// 		.catch((err) => console.log("Something went wrong", err));
	// }, []);

	return (
		<CartContext.Provider value={{ cartArray, addToCart }}>
			{props.children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProviderWrapper };
