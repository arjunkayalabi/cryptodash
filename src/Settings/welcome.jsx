import React from "react";
import { AppContext } from "../App/AppProvider";

const Welcome = ({ name }) => {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) =>
				firstVisit ? (
					<div>
						Hi {name}! Welcome to CryptoDash. Please select your
						favorite coins to begin.
					</div>
				) : null
			}
		</AppContext.Consumer>
	);
};

export default Welcome;
