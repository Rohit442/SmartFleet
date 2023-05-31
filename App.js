import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { LogBox } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import AndroidSafeAreaView from "./AndroidSafeAreaView";
import WelcomeScreen from "./screens/WelcomeScreen";
import ReportScreen from "./screens/ReportScreen";
import DriverLogInScreen from "./screens/DriverLogInScreen";
import DriverDashboard from "./screens/DriverDashboard";
import Alerts from "./screens/Alerts";
import StaffLogInScreen from "./screens/StaffLogInScreen";
import StaffDashboard from "./screens/StaffDashboard";
import WorkConfirmation from "./screens/WorkConfirmation";
import RouteMap from "./screens/RouteMap";
import DetailsScreen from "./screens/DetailsScreen";
import CompletedTasks from "./screens/TrackWork";
import FirebaseValueComponent from "./screens/ViewLevels";
import AccountDetails from "./screens/AccountScreen";
import UserReports from "./screens/UserReports";
import Graphs from "./screens/Graphs";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <SafeAreaView style={AndroidSafeAreaView.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#282828",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          initialRouteName="Welcome"
        >
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
              headerTintColor: Colors.DarkBlue,
              headerTitleStyle: {
                fontWeight: "bold",
              },
              animationTypeForReplace: "pop",
            }}
          />
          <Stack.Screen name="Driver Log in" component={DriverLogInScreen} />
          <Stack.Screen name="Staff Log in" component={StaffLogInScreen} />
          <Stack.Screen name="Driver Dashboard" component={DriverDashboard} />
          <Stack.Screen name="Work confirmation" component={WorkConfirmation} />
          <Stack.Screen name="Route Map" component={RouteMap} />
          <Stack.Screen name="Staff Dashboard" component={StaffDashboard} />
          <Stack.Screen name="Alerts" component={Alerts} />
          <Stack.Screen name="Graphs" component={Graphs} />
          <Stack.Screen name="Access Details" component={DetailsScreen} />
          <Stack.Screen name="Tracking Page" component={CompletedTasks} />
          <Stack.Screen name="View Levels" component={FirebaseValueComponent} />
          <Stack.Screen name="My Account" component={AccountDetails} />
          <Stack.Screen name="User Reports" component={UserReports} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
