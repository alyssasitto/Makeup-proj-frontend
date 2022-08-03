import { useContext, useState } from "react";
import { MakeupContext } from "../context/makeupData.context";
import Product from "../components/Product";
import SelectMenu from "../components/SelectMenu";
import SearchBar from "../components/SearchBar";

function Eyebrows() {
	const value = useContext(MakeupContext);

	const eyebrowProducts = value.makeupList.filter((makeup) => {
		return makeup.product_type === "eyebrow";
	});

	// const [searchProduct, setSearchProduct] = useState("");
	const [makeupList, setMakeupList] = useState(eyebrowProducts);
	const [filteredList, setFilteredList] = useState(eyebrowProducts);

	const searchQuery = (productToSearch) => {
		const newList = makeupList.filter((product) => {
			return product.name.toLowerCase().includes(productToSearch.toLowerCase());
		});

		setFilteredList(newList);
		// setSearchProduct(event.target.value);
	};

	// console.log(eyebrowProducts);
	return (
		<div>
			<SelectMenu />

			<SearchBar searchQuery={searchQuery} />

			{filteredList.map((eyebrowProduct) => {
				return <Product product={eyebrowProduct} />;
			})}
		</div>
	);
}

export default Eyebrows;
