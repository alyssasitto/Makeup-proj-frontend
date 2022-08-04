import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/cart.context";
import { AuthContext } from "../context/auth.context";

function NavBar() {
	const [menuBtn, setMenuBtn] = useState(true);
	const { cartArray, setCartArray } = useContext(CartContext);
	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	function toggleBtn() {
		if (menuBtn) {
			setMenuBtn(false);
		} else {
			setMenuBtn(true);
		}
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
							{isLoggedIn && (
								<div>
									<Link to={"/"}>
										<li>Home</li>
									</Link>
									<Link to={"/cart"} className="shopping-cart">
										<img
											src="images/shopping-cart.png"
											className="cart-icon"
										></img>
										<div className="number">{cartArray.length}</div>
									</Link>
									<button onClick={logOutUser} className="logout-btn">
										Logout
									</button>
								</div>
							)}

							{!isLoggedIn && (
								<div>
									<Link to={"/"}>
										<li>Home</li>
									</Link>
									<Link to={"/login"}>
										<li>Login</li>
									</Link>
									<Link to={"/signup"}>
										<li>Signup</li>
									</Link>
								</div>
							)}
						</ul>
					)}
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
