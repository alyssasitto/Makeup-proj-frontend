import { Link } from "react-router-dom";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Eyes from "../pages/Eyes";

function SelectMenu() {
	const [categoryList, setCatgoryList] = useState(false);
	const [arrow, setArrow] = useState("");

	function showList() {
		if (!categoryList) {
			setCatgoryList(true);
			setArrow("show");
		} else {
			setCatgoryList(false);
			setArrow("");
		}
	}

	return (
		<div className="shop-menu">
			<div onClick={showList} className={"category-container " + arrow}>
				<p className="category-heading">Shop by category</p>
				<img
					src="/images/arrow-icon.png"
					alt="arrow icon"
					className={"arrow-icon"}
				></img>
			</div>

			{categoryList && (
				<div className="category-items">
					<Link to="/eyes">Eyes</Link>
					<Link to="/lips">Lips</Link>
					<Link to="/face">Face</Link>
					<Link to="/eyebrows">Eyebrows</Link>
				</div>
			)}
		</div>
	);
}

export default SelectMenu;
