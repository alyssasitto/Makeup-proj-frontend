import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MakeupContext } from "../context/makeupData.context";
import SelectMenu from "../components/SelectMenu";
import Product from "../components/Product";

function HomePage() {
	const value = useContext(MakeupContext);

	let makeupItems = value.makeupList.map((makeupItem) => {
		return makeupItem;
	});

	makeupItems = makeupItems.slice(0, 20);

	console.log("makeup items", makeupItems);
	return (
		<div className="home">
			<h1 className="heading">Savvy Cosmetics</h1>
			<p className="home-description">
				Keep your makeup kit fresh with Savvy Cosmetics. Shop top beauty brands
				and new arrivals now!
			</p>

			<SelectMenu />

			{makeupItems.map((makeupItem) => {
				return <Product product={makeupItem} className={"makeup-card"} />;
			})}
		</div>
	);
}

export default HomePage;
