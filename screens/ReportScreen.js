import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;

const ReportScreen = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    console.log("Location:", location);
    console.log("Description:", description);
    console.log("Image:", image);
    // Send report data to server or perform necessary actions
    setLocation("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.notif}>
        <TouchableOpacity onPress={() => navigation.navigate("Alerts")}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Driver Log in")}
          style={styles.logInButton}
        >
          <Text style={styles.buttonText}>Driver Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Staff Log in")}
          style={styles.logInButton}
        >
          <Text style={styles.buttonText}>Staff Log in</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Issues with our Fleet?</Text>
      <Text style={styles.title}>Report here</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TouchableOpacity style={styles.cibutton} onPress={() => {}}>
          <Text style={styles.buttonText}>Choose Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Report</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={{ textAlign: "center", color: "white" }}>
          211,Satellite street, Utopia colony, Coimbatore-640015{"\n"}
        </Text>
        <FontAwesome name="phone" size={14} color="white" />
        <Text
          style={{ textAlign: "center", color: "white" }}
          onPress={() => {
            Linking.openURL(`tel:${9876543210}`);
          }}
        >
          9876543210
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  notif: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    top: 5,
    flexDirection: "row",
  },
  logInButton: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
  cibutton: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    margin: 2,
    alignItems: "center",
    width: "100%",
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    margin: 2,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  footer: {
    backgroundColor: "#00008B",
    padding: 5,
    bottom: 0,
    position: "absolute",
    width: width,
    alignItems: "center",
  },
});

export default ReportScreen;
