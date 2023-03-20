import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";

const DriverDashboard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Driver Log in");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.SignOutButtonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.SignOutButton}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Calendar
          style={{
            borderWidth: 1,
            borderColor: "gray",
            height: 370,
            borderRadius: 15,
            position: "relative",
            bottom: 10,
            width: 300,
          }}
          markedDates={{
            "2023-03-01": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
            "2023-03-02": { marked: true },
            "2023-03-03": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
          }}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
        />
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
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
});
