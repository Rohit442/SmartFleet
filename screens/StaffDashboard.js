import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const StaffDashboard = ({ navigation }) => {
  const [selected, setSelected] = useState("");

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Staff Log in");
      })
      .catch((error) => alert(error.message));
  };

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
          style={styles.calendar}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: styles.markedDate,
            "2023-03-18": styles.selectedDate,
            "2023-03-07": styles.selectedDate,
            "2023-03-25": styles.trackedDate,
          }}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Access Details")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Access Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Route Map")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Route map</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tracking Page")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Track Work Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("User Reports")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>User Reports</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StaffDashboard;

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
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#29AB87",
    width: "60%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  calendar: {
    borderWidth: 1,
    borderColor: "gray",
    height: 370,
    borderRadius: 15,
    position: "relative",
    top: 10,
    width: 300,
  },
  markedDate: {
    marked: true,
    selected: true,
    dotColor: "orange",
    selectedColor: "pink",
  },
  selectedDate: {
    selected: true,
    selectedColor: "orange",
  },
  trackedDate: {
    selected: true,
    marked: true,
    selectedColor: "green",
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
