import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MakeupContext = createContext();

function MakeupProviderWrapper(props) {
	const [makeupList, setMakeupList] = useState([]);

	const API_URL = "http://localhost:3001/makeup";

	useEffect(() => {
		axios
			.get(API_URL)
			.then((makeupData) => {
				setMakeupList(makeupData.data);
			})
			.catch((err) => console.log("Something went wrong", err));
	}, []);

	return (
		<MakeupContext.Provider value={{ makeupList }}>
			{props.children}
		</MakeupContext.Provider>
	);
}

export { MakeupContext, MakeupProviderWrapper };
