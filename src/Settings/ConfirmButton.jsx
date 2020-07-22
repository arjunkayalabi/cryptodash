import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";

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

const ConfirmButtonStyled = styled(BlueHeart)`
	cursor: pointer;
`;

export const CenteredDiv = styled.div`
	display: grid;
	justify-content: center;
`;

export default function () {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<CenteredDiv>
					<ConfirmButtonStyled onClick={confirmFavorites}>
						Confirm Favorites
					</ConfirmButtonStyled>
				</CenteredDiv>
			)}
		</AppContext.Consumer>
	);
}
