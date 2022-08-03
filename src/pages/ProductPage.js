import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { MakeupContext } from "../context/makeupData.context";
import { CartContext } from "../context/cart.context";

function ProductPage() {
	const value = useContext(MakeupContext);

	const { cartArray, setCartArray } = useContext(CartContext);

	const [product, setProduct] = useState(null);
	const [productColor, setProductColor] = useState(null);

	const { id } = useParams();

	const getProduct = () => {
		axios
			.get(`http://localhost:3001/makeup/${id}`)
			.then((product) => {
				console.log(product.data);

				setProduct(product.data);
			})
			.catch((err) => console.log("Something went wrong", err));
	};

	useEffect(() => {
		getProduct();
	}, [id]);

	const [colorsList, setColorsList] = useState(false);
	const [arrow, setArrow] = useState("");

	function showList() {
		if (!colorsList) {
			setColorsList(true);
			setArrow("show");
		} else {
			setColorsList(false);
			setArrow("");
		}
	}

	function handleAddProduct() {
		const productOrder = {
			product,
			productColor,
		};

		setCartArray([...cartArray, productOrder]);
	}

	// function addedToCart() {
	// 	handleAddProduct();
	// 	setButtonClicked(true);
	// }

	console.log(cartArray);

	return (
		<div className="product-container">
			{product && (
				<div>
					<img src={product.image_link} className="product-img"></img>
					<h1 className="product-name">{product.name}</h1>
					<p className="brand-name">{product.brand}</p>
					<p className="description-container">{product.description}</p>
					<p className="price-container">
						{product.price_sign} {product.price}0
					</p>

					{productColor && (
						<div className={"color-chosen"}>
							<span>
								<div
									className="circle"
									style={{ backgroundColor: productColor.hex_value }}
								></div>
							</span>
							<span className="chosen-name">{productColor.colour_name}</span>
						</div>
					)}

					{product.product_colors.length > 0 && (
						<div>
							<div onClick={showList} className={"category-container " + arrow}>
								<p className="category-heading">Colors</p>
								<img
									src="/images/arrow-icon.png"
									alt="arrow icon"
									className={"arrow-icon"}
								></img>
							</div>

							{colorsList && (
								<div className="colors-container">
									{product.product_colors.map((productColor, index) => {
										return (
											<div
												key={index}
												onClick={(e) => {
													console.log(productColor);
													setProductColor(productColor);
													setColorsList(false);
													setArrow("");
												}}
												className={"color-container"}
												id={index}
											>
												<div className="color-box">
													<div
														className="circle"
														style={{ backgroundColor: productColor.hex_value }}
													></div>
													<p
													// onClick={toggleCheck}
													// className={activeColor ? "active" : ""}
													>
														{productColor.colour_name}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					)}
					<button onClick={handleAddProduct} className="add-btn">
						Add to cart
					</button>

					{}
				</div>
			)}
		</div>
	);
}

export default ProductPage;
