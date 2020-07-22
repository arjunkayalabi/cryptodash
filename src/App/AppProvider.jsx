import React, { Component, createContext } from "react";

const cc = require("cryptocompare");
cc.setApiKey(
	"453f34d26d37138536fd478405ff3704083ba19c2792f1c98f48954840c3b3b0"
);

export const AppContext = createContext();

class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "dashboard",
			...this.savedSettings(),
			setPage: this.setPage,
			confirmFavorites: this.confirmFavorites,
		};
	}

	componentDidMount = () => {
		this.fetchCoins();
	};

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
		{
			console.log(coinList);
		}
	};

	confirmFavorites = () => {
		// console.log("Hello ");
		this.setState({
			firstVisit: false,
			page: "dashboard",
		});
		localStorage.setItem(
			"cryptoDash",
			JSON.stringify({
				message: "Hello",
			})
		);
	};

	savedSettings() {
		let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
		if (!cryptoDashData) {
			return { page: "settings", firstVisit: true };
		}
		return {};
	}

	setPage = (page) => this.setState({ page });

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

export default AppProvider;
