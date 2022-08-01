import { useContext } from "react";
import { MakeupContext } from "../context/makeupData.context";
import Product from "../components/Product";
import SelectMenu from "../components/SelectMenu";

function Face() {
	const value = useContext(MakeupContext);

	const faceProducts = value.makeupList.filter((makeup) => {
		return makeup.product_type === "foundation";
	});

	console.log(faceProducts);
	return (
		<div>
			<SelectMenu />
			{faceProducts.map((faceProduct) => {
				return <Product product={faceProduct} />;
			})}
		</div>
	);
}

export default Face;
