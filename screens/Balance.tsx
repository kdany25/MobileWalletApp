import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//custom component
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";

const BalanceContainer = styled(Container)`
	background-color: ${colors.graylight};
	width: 100%;
	padding: 25px;
	flex: 1;
`;

//types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import ButtonSection from "../components/Balance/ButtonSection";

type props = StackScreenProps<RootStackParamList, "Balance">;
const Balance: FunctionComponent<props> = ({ route }) => {
	return (
		<BalanceContainer>
			<StatusBar style="dark" />
			<AmountSection balance={route?.params?.balance} />
			<BalanceCardSection {...route?.params} />
			<ButtonSection />
		</BalanceContainer>
	);
};

export default Balance;
