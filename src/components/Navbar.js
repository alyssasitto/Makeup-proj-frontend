import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
	const [menuBtn, setMenuBtn] = useState(true);

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
							<Link to={"/"}>
								<li>Home</li>
							</Link>
							<Link to={"/login"}>
								<li>Login</li>
							</Link>
						</ul>
					)}
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
