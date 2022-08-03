import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/cart.context";

function NavBar() {
	const [menuBtn, setMenuBtn] = useState(true);
	const { cartArray, setCartArray } = useContext(CartContext);

	function toggleBtn() {
		if (menuBtn) {
			setMenuBtn(false);
		} else {
			setMenuBtn(true);
		}
	}

	function handleClick() {
		<Link to={"/cart"}></Link>;
	}

	return (
		<div>
			{!menuBtn && <div className="overlay"></div>}

			<nav>
				<img src="images/logo.png" className="logo"></img>

				<div className="menu-container">
					<div className="btn-container">
						{menuBtn && (
							<button onClick={toggleBtn} className="hb">
								<img src="images/menu.svg" alt="Menu icon" />
							</button>
						)}
						{!menuBtn && (
							<button onClick={toggleBtn} className="close">
								<img src="images/close.svg" alt="Close icon" />
							</button>
						)}
					</div>

					{!menuBtn && (
						<ul className="list-items">
							<Link to={"/"}>
								<li>Home</li>
							</Link>
							<Link to={"/login"}>
								<li>Login</li>
							</Link>
							<Link to={"/cart"} className="shopping-cart">
								<img src="images/shopping-cart.png" className="cart-icon"></img>
								<div className="number">{cartArray.length}</div>
							</Link>
						</ul>
					)}
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
