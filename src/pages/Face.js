import { useState, useContext } from "react";
import { MakeupContext } from "../context/makeupData.context";
import Product from "../components/Product";
import SelectMenu from "../components/SelectMenu";
import SearchBar from "../components/SearchBar";

function Face() {
	const value = useContext(MakeupContext);

	const faceProducts = value.makeupList.filter((makeup) => {
		return makeup.product_type === "foundation";
	});

	const [makeupList, setMakeupList] = useState(faceProducts);
	const [filteredList, setFilteredList] = useState(faceProducts);

	const searchQuery = (productToSearch) => {
		const newList = makeupList.filter((product) => {
			return product.name.toLowerCase().includes(productToSearch.toLowerCase());
		});

		setFilteredList(newList);
		// setSearchProduct(event.target.value);
	};

	console.log(faceProducts);
	return (
		<div>
			<SelectMenu />

			<SearchBar searchQuery={searchQuery} />

			{filteredList.map((faceProduct) => {
				return <Product product={faceProduct} />;
			})}
		</div>
	);
}

export default Face;
