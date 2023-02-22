import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

//types
import { TextProps } from "./types";

const StyledText = styled.Text`
	font-size: 37px;
	color: ${colors.white};
	text-align: left;
	font-family: Lato-Bold;
`;

const BigText: FunctionComponent<TextProps> = (props) => {
	return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;
