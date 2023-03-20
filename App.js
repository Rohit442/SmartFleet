import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { LogBox } from "react-native";

import AndroidSafeAreaView from "./AndroidSafeAreaView";
import WelcomeScreen from "./screens/WelcomeScreen";
import ReportScreen from "./screens/ReportScreen";
import DriverLogInScreen from "./screens/DriverLogInScreen";
import DriverDashboard from "./screens/DriverDashboard";
import Alerts from "./screens/Alerts";
import StaffLogInScreen from "./screens/StaffLogInScreen";
import StaffDashboard from "./screens/StaffDashboard";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <SafeAreaView style={AndroidSafeAreaView.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={ReportScreen}
            options={{
              headerLeft: () => null,
              headerStyle: {
                height: 0,
                backgroundColor: "#909090",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              animationTypeForReplace: "pop",
            }}
          />
          <Stack.Screen name="Driver Log in" component={DriverLogInScreen} />
          <Stack.Screen name="Staff Log in" component={StaffLogInScreen} />
          <Stack.Screen name="Driver Dashboard" component={DriverDashboard} />
          <Stack.Screen name="Staff Dashboard" component={StaffDashboard} />
          <Stack.Screen name="Alerts" component={Alerts} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
