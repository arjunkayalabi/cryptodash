import React from "react";
import "./App.css";
import Welcome from "./components/welcome";
import styled, { css } from "styled-components";
import AppLayout from "./components/AppLayout";
import AppBar from "./components/AppBar";

const BlueHeart = styled.div`
	background-color: #1d91da;
	color: #ffffff;
	border: none;
	padding: 13px 40px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	border-radius: 9999px;
	font-size: 15px;
	font-weight: 700;
	${(props) =>
		props.primary &&
		css`
			background: #865dca;
			color: #ffffff;
		`}
`;

const PurpleOctopus = styled(BlueHeart)`
	background-color: #4ca270;
	color: #ffffff;
`;

const CherryBlossom = styled(BlueHeart)`
	background-color: #b54c6c;
	color: #ffffff;
`;

function App() {
	return (
		<AppLayout>
			<AppBar />
			<Welcome name="CryptoDash" />
			<BlueHeart>Hello</BlueHeart>
			<BlueHeart primary>Hello</BlueHeart>
			<PurpleOctopus>Hello</PurpleOctopus>
			<CherryBlossom>Hello</CherryBlossom>
		</AppLayout>
	);
}

export default App;
