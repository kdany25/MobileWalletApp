import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//Custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";

//dummy data
import { cardsData } from "../dummyData";

const HomeContainer = styled(Container)`
	background-color: ${colors.graylight};
	width: 100%;
	flex: 1;
`;

const Home: FunctionComponent = () => {
	return (
		<HomeContainer>
			<StatusBar style="dark" />
			<CardSection data={cardsData} />
		</HomeContainer>
	);
};
export default Home;
