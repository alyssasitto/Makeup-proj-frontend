import { useState, useContext } from "react";
import { MakeupContext } from "../context/makeupData.context";
import Product from "../components/Product";
import SelectMenu from "../components/SelectMenu";
import SearchBar from "../components/SearchBar";

function Lips() {
	const value = useContext(MakeupContext);

	const lipProducts = value.makeupList.filter((makeup) => {
		return makeup.product_type === "lipstick";
	});

	const [makeupList, setMakeupList] = useState(lipProducts);
	const [filteredList, setFilteredList] = useState(lipProducts);

	const searchQuery = (productToSearch) => {
		const newList = makeupList.filter((product) => {
			return product.name.toLowerCase().includes(productToSearch.toLowerCase());
		});

		setFilteredList(newList);
		// setSearchProduct(event.target.value);
	};

	console.log(lipProducts);
	return (
		<div>
			<SelectMenu />

			<SearchBar searchQuery={searchQuery} />

			{filteredList.map((lipProduct) => {
				return <Product product={lipProduct} />;
			})}
		</div>
	);
}

export default Lips;
