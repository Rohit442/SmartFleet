import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import { MaterialIcons } from "@expo/vector-icons";

const DriverDashboard = ({ navigation }) => {
  const [selected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.accountButtonContainer}>
        <MaterialIcons
          name="account-circle"
          size={34}
          color="white"
          onPress={() => {
            navigation.navigate("My Account");
          }}
          style={styles.accountButton}
        />
      </View>
      <View style={styles.mainContainer}>
        <Calendar
          style={{
            borderWidth: 2,
            borderColor: "#29AB87",
            height: 370,
            borderRadius: 15,
            width: 300,
            bottom: 10,
          }}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              marked: true,
              selected: true,
              dotColor: "orange",
              selectedColor: "pink",
            },
            "2023-03-18": {
              selected: true,
              selectedColor: "orange",
            },
            "2023-03-07": {
              selected: true,
              marked: true,
              selectedColor: "orange",
            },
            "2023-03-25": {
              selected: true,
              marked: true,
              selectedColor: "#29AB87",
            },
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Work confirmation")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Work update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Route Map")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Route map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DriverDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#29AB87",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },

  SignOutButton: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
  SignOutButtonContainer: {
    position: "absolute",
    right: 0,
    top: 5,
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  accountButtonContainer: {
    position: "absolute",
    right: 5,
    top: 5,
    flexDirection: "row",
  },
  accountButton: {
    marginRight: 10,
  },
});
