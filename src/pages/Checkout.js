import { AuthContext } from "../context/auth.context";
import { useState } from "react";
function Checkout() {
	const [name, setName] = useState("");
	const [mailingStreetAddress, setMailingStreetAddress] = useState("");
	const [mailingCity, setMailingCity] = useState("");
	const [mailingState, setMailingState] = useState("");
	const [mailingZipCode, setMailingZipCode] = useState("");

	const [cardHolder, setCardHolder] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cvvNum, setCvvNum] = useState("");
	const [billingStreetAddress, setBillingStreetAddress] = useState("");
	const [billingCity, setBillingCity] = useState("");
	const [billingState, setBillingState] = useState("");
	const [billingZip, setBillingZip] = useState("");

	const handleName = (e) => setName(e.target.value);
	const handleMailingStreet = (e) => setMailingStreetAddress(e.target.value);
	const handleMailingCity = (e) => setMailingCity(e.target.value);
	const handleMailingState = (e) => setMailingState(e.target.value);
	const handleMailingZip = (e) => setMailingZipCode(e.target.value);

	const handleCardHolder = (e) => setCardHolder(e.target.value);
	const handleCardNum = (e) => setCardNumber(e.target.value);
	const handleCvvNum = (e) => setCvvNum(e.target.value);
	const handleBillingStreet = (e) => setBillingStreetAddress(e.target.value);
	const handleBillingCity = (e) => setBillingCity(e.target.value);
	const handleBillingState = (e) => setBillingState(e.target.value);
	const handleBillingZip = (e) => setBillingZip(e.target.value);

	return (
		<div>
			<div>
				<label for="name">Name:</label>
				<input type="text" name="name" value={name} onChange={handleName} />
			</div>

			<h4>Mailing Address:</h4>
			<div>
				<label for="mailingStreetAddress">Street:</label>
				<input
					type="text"
					name="mailingStreetAddress"
					value={mailingStreetAddress}
					onChange={handleMailingStreet}
				/>
			</div>

			<div>
				<label for="mailingCity">City:</label>
				<input
					type="text"
					name="mailingCity"
					value={mailingCity}
					onChange={handleMailingCity}
				/>
			</div>

			<div>
				<label for="mailingSate">State:</label>
				<input
					type="text"
					name="mailingState"
					value={mailingState}
					onChange={handleMailingState}
				/>
			</div>

			<div>
				<label for="mailingZip">Zip code:</label>
				<input
					type="number"
					name="mailingZip"
					value={mailingZipCode}
					onChange={handleMailingZip}
				/>
			</div>

			<h4>Card Information:</h4>

			<div>
				<label for="cardHolderName">Card Holder:</label>
				<input
					type="text"
					name="cardHolderName"
					value={cardHolder}
					onChange={handleCardHolder}
				/>
			</div>

			<div>
				<label for="cardNumber">Card Number:</label>
				<input
					type="number"
					name="cardNumber"
					value={cardNumber}
					onChange={handleCardNum}
				/>
			</div>

			<div>
				<label for="cvv">CVV:</label>
				<input
					type="number"
					name="cvv"
					value={cvvNum}
					onChange={handleCvvNum}
				/>
			</div>

			<h4>Billing Address:</h4>
			<div>
				<label for="billingStreetAddress">Street:</label>
				<input
					type="text"
					name="billingStreetAddress"
					value={billingStreetAddress}
					onChange={handleBillingStreet}
				/>
			</div>

			<div>
				<label for="billingCity">City:</label>
				<input
					type="text"
					name="billingCity"
					value={billingCity}
					onChange={handleBillingCity}
				/>
			</div>

			<div>
				<label for="billingSate">State:</label>
				<input
					type="text"
					name="billingState"
					value={billingState}
					onChange={handleBillingState}
				/>
			</div>

			<div>
				<label for="billingZip">Zip code:</label>
				<input
					type="number"
					name="billingZip"
					value={billingZip}
					onChange={handleBillingZip}
				/>
			</div>

			<button>Confirm Order</button>
		</div>
	);
}

export default Checkout;
