import Product from "../components/Product";
import { CartContext } from "../context/cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartItems() {
	const { cartArray, setCartArray } = useContext(CartContext);

	function handleDelete(index) {
		const newCart = cartArray.splice(index, 1);
		setCartArray(newCart);
	}

	return (
		<div>
			<h1 className="cart-heading">Cart</h1>

			{cartArray.map((cartItem, index) => {
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

							<button
								onClick={() => {
									handleDelete(index);
								}}
							>
								Delete
							</button>
						</div>
					</div>
				);
			})}

			<p className="total">
				Total:
				{cartArray.map((prod) => {
					let total = 0;
					const { product } = prod;
					console.log(product.price);
					return (total += Number(product.price));

					{
						/* return Number(total); */
					}
					{
						/* const { product, productColor } = prod;
					total = product.price; */
					}
				})}
			</p>

			<Link to={"/checkout"} className="checkout">
				Checkout
			</Link>
		</div>
	);
}

export default CartItems;
