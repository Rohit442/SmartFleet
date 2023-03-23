import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { auth } from "../firebase";

const AccountDetails = ({ navigation }) => {
  const password = "dummy1";
  const name = "Rohit";
  const phoneNumber = "123-456-7890";
  const onSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={auth.currentUser?.email}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} editable={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          keyboardType="phone-pad"
          editable={false}
        />
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={onSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
    backgroundColor: "#282828",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    color: "gray",
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: "#29AB87",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  signOutButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AccountDetails;
