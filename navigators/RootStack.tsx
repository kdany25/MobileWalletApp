import React, { FunctionComponent } from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Welcome from "./../screens/Welcome";
import Home from "../screens/Home";

//colors
import { colors } from "../components/colors";

//customer component
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";

//Image
import Avi from "./../assets/avi/avatar.png";

export type RootStackParamList = {
	Welcome: undefined;
	Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: colors.graylight,
						borderBottomWidth: 0,
						shadowOpacity: 0,
						elevation: 0,
						height: 120,
					},
					headerTintColor: colors.secondary,
					headerRightContainerStyle: {
						paddingRight: 25,
					},
					headerLeftContainerStyle: {
						paddingLeft: 10,
					},
					headerRight: () => (
						<Profile
							img={Avi}
							imgContainerStyle={{
								backgroundColor: colors.tertiary,
							}}
						/>
					),
				}}
				initialRouteName="Home"
			>
				<Stack.Screen
					name="Welcome"
					component={Welcome}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerLeft: (props) => (
							<Greeting
								mainText="Hey coby!"
								subText="Welcome back"
								{...props}
							/>
						),

						headerTitle: () => <></>,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootStack;
