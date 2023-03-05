import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import { launchImageLibrary } from "react-native-image-picker";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const ReportScreen = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleChooseImage = () => {
    ImagePicker.showImagePicker(
      { title: "Select Image", mediaType: "photo" },
      (response) => {
        if (response.uri) {
          setImage(response);
        }
      }
    );
  };

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Log in")}
          style={styles.logInButton}
        >
          <Text style={styles.buttonText}>Driver Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Log in")}
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
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image.uri }} style={styles.image} />
          ) : (
            <Button title="Choose Image" onPress={handleChooseImage} />
          )}
        </View>
        <Button title="Submit Report" onPress={handleSubmit} />
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    maxWidth: 400,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    top: 5,
    flexDirection: "row",
  },
  logInButton: {
    backgroundColor: "#0782F9",
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default ReportScreen;
