import Product from "../components/Product";
import { CartContext } from "../context/cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

let total = 0;

function CartItems() {
	const { cartArray, setCartArray } = useContext(CartContext);

	return (
		<div>
			{cartArray.map((cartItem) => {
				const { product, productColor } = cartItem;

				return (
					<div>
						<div key={product.id} className="makeup-card">
							<img src={product.image_link} className="makeup-img"></img>
							<h3>{product.name}</h3>
							<p className="brand">{product.brand}</p>
							<p className="price">
								{product.price_sign} {product.price}0
							</p>
							{productColor && (
								<div className={"color-chosen center-helper"}>
									<span>
										<div
											className="circle"
											style={{ backgroundColor: productColor.hex_value }}
										></div>
									</span>
									<span className="chosen-name">
										{productColor.colour_name}
									</span>
								</div>
							)}

							<button>Delete</button>
						</div>
					</div>
				);
			})}

			<p>
				Total:{" "}
				{cartArray.map((prod) => {
					const { product, productColor } = prod;
					total += product.price;
					return String(total);
				})}
			</p>

			<Link to={"/checkout"}>Checkout</Link>
		</div>
	);
}

export default CartItems;
