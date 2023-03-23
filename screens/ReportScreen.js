import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../firebase";

var width = Dimensions.get("window").width;

const ReportScreen = ({ navigation }) => {
  const todoRef = firebase.firestore().collection("newData");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const handleSubmit = () => {
    console.log("Location:", location);
    console.log("Description:", description);
    console.log("Image:", image);
    if (
      location &&
      location.length > 0 &&
      description &&
      description.length > 0
    ) {
      // get the timestamp

      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      const data = {
        Location: location,
        Description: description,
        createdAt: timestamp,
      };

      todoRef
        .add(data)
        .then(() => {
          // release the new field state

          setLocation("");
          setDescription("");
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }

    setLocation("");
    setDescription("");
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
      console.log(e);
    }
    setUploading(false);
    Alert.alert("Photo uploaded..!!");
    setImage(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.notif}>
        <TouchableOpacity onPress={() => navigation.navigate("Alerts")}>
          <Ionicons name="notifications-outline" size={24} color="white" />
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
          placeholderTextColor={"white"}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          placeholderTextColor={"white"}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TouchableOpacity style={styles.cibutton} onPress={pickImage}>
          <Text style={styles.buttonText}>Choose Image</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            handleSubmit();
            uploadImage();
          }}
        >
          <Text style={styles.buttonText}>Submit Report</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          211,Satellite street, Utopia colony, Coimbatore-640015{"\n"}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="phone" size={14} color="white" />
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              bottom: 3.5,
              left: 2,
            }}
            onPress={() => {
              Linking.openURL(`tel:${9876543210}`);
            }}
          >
            9876543210
          </Text>
        </View>
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
    backgroundColor: "#282828",
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
    color: "#fff",
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
    color: "white",
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    top: 5,
    flexDirection: "row",
  },
  logInButton: {
    backgroundColor: "#29AB87",
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
  cibutton: {
    backgroundColor: "#29AB87",
    padding: 5,
    borderRadius: 5,
    margin: 2,
    alignItems: "center",
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#29AB87",
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
    backgroundColor: "#29AB87",
    padding: 5,
    bottom: 0,
    position: "absolute",
    width: width,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
  },
});

export default ReportScreen;
