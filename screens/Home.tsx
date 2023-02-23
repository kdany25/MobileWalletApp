import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//Custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";

//dummy data
import { cardsData, transactionData } from "../dummyData";

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
			<TransactionSection data={transactionData} />
		</HomeContainer>
	);
};
export default Home;
