import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const DetailsScreen = ({ navigation }) => {
  let ED =
    "https://drive.google.com/file/d/1kevQucFosOkhxA0ot-825SwogjMVKERM/view?usp=share_link";
  const VD =
    "https://drive.google.com/file/d/1DGZUkwbckvdkIt4A8lHKBSCkYwTsNKuA/view?usp=share_link";

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => Linking.openURL(VD)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Dowload Vehicle Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL(ED)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Dowload Employee Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("View Levels")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>View Dustbin details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
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
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#282828",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
