import { useState } from "react";

function SearchBar(props) {
	const { searchQuery } = props;

	const [searchProduct, setSearchProduct] = useState("");

	const handleSearch = (e) => {
		setSearchProduct(e.target.value);
		searchQuery(e.target.value);
	};

	return (
		<div>
			<input
				type="text"
				value={searchProduct}
				onChange={handleSearch}
				placeholder="Search"
				className="search-bar"
			></input>
		</div>
	);
}

export default SearchBar;
