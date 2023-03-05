import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const bg = require("nav-app/assets/Wp.png");
const logo = require("nav-app/assets/Logo-b.png");

const NewWelcomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate("Home");
      });
    }, 1000);
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground style={styles.background} source={bg}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    opacity: 0.8,
  },
});

export default NewWelcomeScreen;
