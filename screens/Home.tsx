import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//Custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

//dummy data
import { cardsData, transactionData, sendMoneyData } from "../dummyData";

const HomeContainer = styled(Container)`
	background-color: ${colors.graylight};
	width: 100%;
	flex: 1;
`;

//types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

export type props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<props> = () => {
	return (
		<HomeContainer>
			<StatusBar style="dark" />
			<CardSection data={cardsData} />
			<TransactionSection data={transactionData} />
			<SendMoneySection data={sendMoneyData} />
		</HomeContainer>
	);
};
export default Home;
