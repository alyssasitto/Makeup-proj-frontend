import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";
import { MakeupProviderWrapper } from "./context/makeupData.context";
import { CartProviderWrapper } from "./context/cart.context";
import { AuthProviderWrapper } from "./context/auth.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<MakeupProviderWrapper>
			<AuthProviderWrapper>
				<CartProviderWrapper>
					<App />
				</CartProviderWrapper>
			</AuthProviderWrapper>
		</MakeupProviderWrapper>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
