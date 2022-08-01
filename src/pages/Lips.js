import { useContext } from "react";
import { MakeupContext } from "../context/makeupData.context";
import Product from "../components/Product";
import SelectMenu from "../components/SelectMenu";

function Lips() {
	const value = useContext(MakeupContext);

	const lipProducts = value.makeupList.filter((makeup) => {
		return makeup.product_type === "lipstick";
	});

	console.log(lipProducts);
	return (
		<div>
			<SelectMenu />
			{lipProducts.map((lipProduct) => {
				return <Product product={lipProduct} />;
			})}
		</div>
	);
}

export default Lips;
