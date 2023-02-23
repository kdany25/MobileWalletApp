import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

//components
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";
import RegularButton from "../Buttons/RegularButton";

const ButtonSectionBackGround = styled.View`
	width: 100%;
	align-items: center;
	flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
	return (
		<ButtonSectionBackGround>
			<RegularButton btnStyles={{ width: "50%" }} onPress={() => {}}>
				Cancel <Ionicons name="card" size={17} color={colors.white} />{" "}
			</RegularButton>
		</ButtonSectionBackGround>
	);
};

export default ButtonSection;
