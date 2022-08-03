import { getDefaultNormalizer } from "@testing-library/react";
import { useState, useContext } from "react";
import { MakeupContext } from "../context/makeupData.context";
import Product from "../components/Product";
import SelectMenu from "../components/SelectMenu";
import SearchBar from "../components/SearchBar";

function Eyes() {
	const value = useContext(MakeupContext);

	const eyeProducts = value.makeupList.filter((makeup) => {
		return makeup.product_type === "eyeshadow";
	});

	const [makeupList, setMakeupList] = useState(eyeProducts);
	const [filteredList, setFilteredList] = useState(eyeProducts);

	const searchQuery = (productToSearch) => {
		const newList = makeupList.filter((product) => {
			return product.name.toLowerCase().includes(productToSearch.toLowerCase());
		});

		setFilteredList(newList);
		// setSearchProduct(event.target.value);
	};

	console.log(eyeProducts);

	return (
		<div>
			<SelectMenu />

			<SearchBar searchQuery={searchQuery} />

			{filteredList.map((eyeProduct) => {
				return <Product product={eyeProduct} />;
			})}
		</div>
	);
}

export default Eyes;
