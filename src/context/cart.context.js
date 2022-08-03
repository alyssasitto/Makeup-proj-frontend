import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

function CartProviderWrapper(props) {
	const [cartArray, setCartArray] = useState([]);

	const API_URL = "http://localhost:3001/makeup";

	// useEffect(() => {
	// 	axios
	// 		.get(API_URL)
	// 		.then((makeupData) => {
	// 			setMakeupList(makeupData.data);
	// 		})
	// 		.catch((err) => console.log("Something went wrong", err));
	// }, []);

	return (
		<CartContext.Provider value={{ cartArray, setCartArray }}>
			{props.children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProviderWrapper };
