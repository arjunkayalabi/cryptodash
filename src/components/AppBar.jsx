import React from "react";
import styled, { css } from "styled-components";

const Bar = styled.div`
	display: grid;
	margin-botton: 40px;
	grid-template-columns: 180px auto 100px 30px 100px;
`;

const Logo = styled.div`
	font-size: 1.5em;
`;

const ControlButtonElement = styled.div`
	cursor: pointer;
	${(props) =>
		props.active &&
		css`
			// color: #1d91da;
			border-bottom: solid 2px;
			text-align: center;
		`}
`;

function ControlButton({ name, active }) {
	return <ControlButtonElement active={active}>{name}</ControlButtonElement>;
}

const AppBar = () => {
	return (
		<Bar>
			<Logo>CryptoDash</Logo>
			<div></div>
			<ControlButton active name="Dashboard" />
			<div></div>
			<ControlButton name="Settings" />
		</Bar>
	);
};

export default AppBar;
