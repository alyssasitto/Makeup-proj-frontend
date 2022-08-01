import { Link } from "react-router-dom";
import SelectMenu from "./SelectMenu";

function Product(props) {
	const { product } = props;
	return (
		<div>
			<div key={product.id} className="makeup-card">
				<img src={product.image_link} className="makeup-img"></img>
				<h3>{product.name}</h3>
				<p className="brand">{product.brand}</p>
				<p className="price">
					{product.price_sign} {product.price}0
				</p>

				<Link to={`product/${product.id}`}>
					<button>View</button>
				</Link>
			</div>
		</div>
	);
}

export default Product;
