import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Bar = styled.div`
	display: grid;
	// margin-botton: 10px;
	grid-template-columns: 180px auto 100px 30px 100px;
	text-align: center;
`;

const Logo = styled.div`
	font-size: 1.5em;
	text-align: left;
	margin: 0;
	padding: 0;
`;

const ControlButtonElement = styled.div`
	cursor: pointer;
	${(props) =>
		props.active &&
		css`
			// color: #1d91da;
			border-bottom: solid 2px #1d91da;
			text-align: center;
		`}
`;

const toTitleCase = (word) => word.charAt(0).toUpperCase() + word.substr(1);

function ControlButton({ name }) {
	return (
		<AppContext.Consumer>
			{({ page, setPage }) => (
				<ControlButtonElement
					active={page === name}
					onClick={() => setPage(name)}
				>
					{toTitleCase(name)}
				</ControlButtonElement>
			)}
		</AppContext.Consumer>
	);
}

const AppBar = () => {
	return (
		<Bar>
			<Logo>CryptoDash</Logo>
			<div></div>
			<ControlButton active name="dashboard" />
			<div></div>
			<ControlButton name="settings" />
		</Bar>
	);
};

export default AppBar;
