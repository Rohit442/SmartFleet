import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AlertPage = ({ announcements }) => {
  return (
    <View style={styles.container}>
      {announcements.map((announcement, index) => (
        <View key={index} style={styles.alert}>
          <Text style={styles.text}>{announcement}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#e6f2ff",
    borderRadius: 4,
    marginBottom: 16,
  },
  alert: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#b3d9ff",
    borderRadius: 4,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: "#007bff",
    marginLeft: 8,
  },
});

const Alerts = () => {
  const announcements = [
    "Garbage collection will be delayed by one day due to a holiday",
    "Recycling will be picked up on a different day this week",
    "Please make sure your garbage is properly bagged and tied",
  ];

  return (
    <View>
      <AlertPage announcements={announcements} />
      {/* other components and logic for the Garbage Collection App */}
    </View>
  );
};

export default Alerts;
