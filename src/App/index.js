import React from "react";
import "./App.css";
// import Welcome from "../Settings/welcome";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider from "./AppProvider";
import Settings from "../Settings";

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				{/* <Welcome name="CryptoDash" /> */}
				<Settings />
			</AppProvider>
		</AppLayout>
	);
}

export default App;
