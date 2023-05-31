import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const GreetingsPopup = () => {
  const [slideAnim] = useState(new Animated.Value(100)); // Initial position is below the screen

  const showPopup = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const hidePopup = () => {
    Animated.timing(slideAnim, {
      toValue: 100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showPopup} style={styles.button}>
        <Text style={styles.buttonText}>Show Greetings</Text>
      </TouchableOpacity>
      <Animated.View
        style={[styles.popup, { transform: [{ translateY: slideAnim }] }]}
      >
        <Text style={styles.popupText}>Hello! Welcome to our app.</Text>
        <TouchableOpacity onPress={hidePopup} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#2ecc71",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  popup: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  popupText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#e74c3c",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default GreetingsPopup;
