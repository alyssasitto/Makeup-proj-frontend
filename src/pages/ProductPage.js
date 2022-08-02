import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { MakeupContext } from "../context/makeupData.context";

function ProductPage() {
	const value = useContext(MakeupContext);

	const [product, setProduct] = useState(null);

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

	const [chosenColor, setChosenColor] = useState("");
	const [activeColor, setActiveColor] = useState(false);

	// function pickedColor() {
	// 	if (chosenColor) {
	// 		setActiveColor("active");
	// 	}
	// }

	console.log(chosenColor);

	return (
		<div className="product-container">
			{product && (
				<div>
					<img src={product.image_link} className="product-img"></img>
					<h1 className="product-name">{product.name}</h1>
					<p className="brand-name">{product.brand}</p>
					<p className="description-container">{product.description}</p>
					<p>
						{product.price_sign} {product.price}0
					</p>
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
									{product.product_colors.map((product, index) => {
										return (
											<div
												onClick={() => {
													setChosenColor(index);
												}}
												className={"color-container"}
												value={index}
											>
												<div className="color-box">
													<div
														className="circle"
														style={{ backgroundColor: product.hex_value }}
													></div>
													<p>{product.colour_name}</p>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					)}
					{/* {product.product_colors.map((product) => {
						return (
							<div className={"color-container"}>
								<div className="color-box">
									<div
										className="circle"
										style={{ backgroundColor: product.hex_value }}
									></div>
									<p>{product.colour_name}</p>
								</div>
							</div>
						);
					})} */}
					<button>Add to cart</button>
				</div>
			)}
		</div>
	);
}

export default ProductPage;
