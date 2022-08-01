import { getDefaultNormalizer } from "@testing-library/react";
import { useContext } from "react";
import { MakeupContext } from "../context/makeupData.context";
import Product from "../components/Product";
import SelectMenu from "../components/SelectMenu";

function Eyes() {
	const value = useContext(MakeupContext);

	const eyeProducts = value.makeupList.filter((makeup) => {
		return makeup.product_type === "eyeshadow";
	});

	console.log(eyeProducts);

	return (
		<div>
			<SelectMenu />

			{eyeProducts.map((eyeProduct) => {
				return <Product product={eyeProduct} />;
			})}
		</div>
	);
}

export default Eyes;
