import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { firebase } from "../firebase";

const RealtimeData = () => {
  const [dustbins, setDustbins] = useState([]);

  useEffect(() => {
    const ref = firebase.database().ref("/Dustbins");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dustbinsArray = Object.keys(data).map((key) => {
          return {
            name: key,
            level: data[key].level,
            odor: data[key].odor,
            area: data[key].area,
          };
        });
        setDustbins(dustbinsArray);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {dustbins.map((dustbin) => (
        <View key={dustbin.name} style={styles.dustbinContainer}>
          <Text style={styles.dustbinName}>{dustbin.name}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Level:</Text>
            <Text style={styles.infoValue}>{dustbin.level}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Odor:</Text>
            <Text style={styles.infoValue}>{dustbin.odor}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Area:</Text>
            <Text style={styles.infoValue}>{dustbin.area}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RealtimeData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828",
  },
  dustbinContainer: {
    marginBottom: 20,
    backgroundColor: "#29AB87",
    width: "75%",
    height: "25%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dustbinName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  infoTitle: {
    fontWeight: "bold",
    marginRight: 5,
    color: "white",
  },
  infoValue: {
    color: "white",
  },
});
