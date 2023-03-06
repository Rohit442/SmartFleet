import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { LogBox } from "react-native";

import AndroidSafeAreaView from "./AndroidSafeAreaView";
import NewWelcomeScreen from "./screens/NewWelcomeScreen";
import ReportScreen from "./screens/ReportScreen";
import LogInScreen from "./screens/LogInScreen";
import Dashboard from "./screens/Dashboard";
import Alerts from "./screens/Alerts";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <SafeAreaView style={AndroidSafeAreaView.AndroidSafeArea}>
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
          <Stack.Screen name="Log in" component={LogInScreen} />
          <Stack.Screen name="Worker Dashboard" component={Dashboard} />
          <Stack.Screen name="Alerts" component={Alerts} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
