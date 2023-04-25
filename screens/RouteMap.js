import React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 11.02712,
          longitude: 77.035029,
          latitudeDelta: 0.01,
          longitudeDelta: 0.001,
        }}
      >
        <Marker coordinate={{ latitude: 11.027387, longitude: 77.037847 }}>
          <Callout>
            <Text>Dustbin 1</Text>
          </Callout>
        </Marker>

        <Marker coordinate={{ latitude: 11.02954, longitude: 77.03413 }}>
          <Callout>
            <Text>Dustbin 2</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
