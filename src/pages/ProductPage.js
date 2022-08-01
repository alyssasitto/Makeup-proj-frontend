import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MakeupContext } from "../context/makeupData.context";

function ProductPage() {
	const value = useContext(MakeupContext);

	const [product, setProduct] = useState(null);

	const { productId } = useParams();

	const getProduct = () => {
		axios
			.get(`${value.makeupList}/product/${productId}`)
			.then((product) => {
				console.log(product.data);
				setProduct(product.data);
			})
			.catch((err) => console.log("Something went wrong", err));
	};

	useEffect(() => {
		getProduct();
	}, []);

	return <div>{product && <div>{product.name}</div>}</div>;
}

export default ProductPage;
