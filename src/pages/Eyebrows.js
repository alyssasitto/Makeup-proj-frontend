import { useContext } from "react";
import { MakeupContext } from "../context/makeupData.context";
import Product from "../components/Product";
import SelectMenu from "../components/SelectMenu";

function Eyebrows() {
	const value = useContext(MakeupContext);

	const eyebrowProducts = value.makeupList.filter((makeup) => {
		return makeup.product_type === "eyebrow";
	});

	console.log(eyebrowProducts);
	return (
		<div>
			<SelectMenu />

			{eyebrowProducts.map((eyebrowProduct) => {
				return <Product product={eyebrowProduct} />;
			})}
		</div>
	);
}

export default Eyebrows;
