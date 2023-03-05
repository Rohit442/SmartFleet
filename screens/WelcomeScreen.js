import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
const bg = require("first-app/assets/Wp.png");
const logo = require("first-app/assets/Logo-b.png");
const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={[
          styles.image,
          {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ alignItems: "center", top: 50 }}>
          <Image source={logo} style={styles.logo} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: "70%",
    height: 300,
    resizeMode: "contain",
    position: "absolute",
    top: 190,
    flexWrap: "wrap",
  },
  image: {
    flex: 1,
  },
});
export default WelcomeScreen;
