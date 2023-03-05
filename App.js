import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NewWelcomeScreen from "./screens/NewWelcomeScreen";
import ReportScreen from "./screens/ReportScreen";
import LogInScreen from "./screens/LogInScreen";
import Dashboard from "./screens/Dashboard";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewWelcome">
        <Stack.Screen
          name="NewWelcome"
          component={NewWelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={ReportScreen}
          options={{
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: "#909090",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="Log in" component={LogInScreen} />
        <Stack.Screen name="Worker Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
