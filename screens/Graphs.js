import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  VictoryChart,
  VictoryBar,
  VictoryStack,
  VictoryAxis,
  VictoryLegend,
  VictoryPie,
} from "victory-native";

const Graphs = () => {
  const data = [
    {
      year: 2000,
      "#66FF00": 0.571,
      yellow: 0.183,
      "#F79500": 1.523,
      red: 1.943,
    },
    {
      year: 2002,
      "#66FF00": 0.643,
      yellow: 0.206,
      "#F79500": 1.712,
      red: 2.175,
    },
    {
      year: 2004,
      "#66FF00": 0.724,
      yellow: 0.219,
      "#F79500": 1.948,
      red: 2.469,
    },
    {
      year: 2006,
      "#66FF00": 0.857,
      yellow: 0.274,
      "#F79500": 2.288,
      red: 2.914,
    },
    {
      year: 2008,
      "#66FF00": 1.111,
      yellow: 0.32,
      "#F79500": 2.956,
      red: 3.753,
    },
    {
      year: 2010,
      "#66FF00": 1.351,
      yellow: 0.411,
      "#F79500": 3.429,
      red: 4.351,
    },
    {
      year: 2012,
      "#66FF00": 1.571,
      yellow: 0.503,
      "#F79500": 4.186,
      red: 5.314,
    },
    {
      year: 2014,
      "#66FF00": 1.818,
      yellow: 0.584,
      "#F79500": 5.061,
      red: 6.418,
    },
    {
      year: 2016,
      "#66FF00": 2.143,
      yellow: 0.548,
      "#F79500": 6.571,
      red: 8.343,
    },
    {
      year: 2019,
      "#66FF00": 2.632,
      yellow: 0.267,
      "#F79500": 7.098,
      red: 9.014,
    },
  ];

  const pieData = [
    {
      x: "Recycled",
      y: 2.632,
      fill: "#66FF00",
    },
    {
      x: "Incinerated",
      y: 0.267,
      fill: "yellow",
    },
    {
      x: "Landfill",
      y: 7.098,
      fill: "#F79500",
    },
    {
      x: "Mismanaged",
      y: 9.014,
      fill: "red",
    },
  ];

  const legendData = [
    { name: "Recycled", symbol: { fill: "#66FF00" } },
    { name: "Incinerated", symbol: { fill: "yellow" } },
    { name: "Landfill", symbol: { fill: "#F79500" } },
    { name: "Mismanaged", symbol: { fill: "red" } },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <VictoryChart
            height={400}
            width={350}
            style={{}}
            padding={{ left: 20, right: 30, top: 90, bottom: 50 }}
            domainPadding={{ x: 40 }}
          >
            <VictoryAxis
              label={"Year"}
              key="x-axis"
              tickValues={[2000, 2004, 2008, 2012, 2016, 2019]}
              tickFormat={(x) => x}
              style={{
                axis: {
                  stroke: "white", //CHANGE COLOR OF X-AXIS
                },
                tickLabels: {
                  fill: "white", //CHANGE COLOR OF X-AXIS LABELS
                },
                axisLabel: {
                  fill: "white",
                },
              }}
              colorScale={["#ffffff"]}
            />
            <VictoryAxis
              key="y-axis"
              dependentAxis
              tickValues={[0, 5, 10, 15, 20]}
              tickFormat={(y) => `${y}`}
              style={{
                axis: {
                  stroke: "white", //CHANGE COLOR OF X-AXIS
                },
                tickLabels: {
                  fill: "white", //CHANGE COLOR OF X-AXIS LABELS
                },
              }}
            />
            <VictoryStack colorScale={["#66FF00", "yellow", "#F79500", "red"]}>
              <VictoryBar data={data} x="year" y="#66FF00" />
              <VictoryBar data={data} x="year" y="yellow" />
              <VictoryBar data={data} x="year" y="#F79500" />
              <VictoryBar data={data} x="year" y="red" />
            </VictoryStack>
            <VictoryLegend
              x={85}
              y={5}
              title="Legend"
              centerTitle
              orientation="horizontal"
              itemsPerRow={2}
              gutter={30}
              style={{
                border: { stroke: "black" },
                title: { fontSize: 20, fill: "white", fontWeight: "bold" },
                labels: {
                  fill: "white",
                  right: 20,
                  position: "relative",
                  fontSize: 13,
                  marginBottom: 10,
                },
              }}
              data={legendData}
            />
          </VictoryChart>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            The graph shows an obvious increase in garbage disposal from 2000 to
            2019, with the majority being mismanaged or sent to landfill,
            followed by incineration, and the lowest proportion being properly
            managed and recycled.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <VictoryPie
            radius={160}
            data={pieData}
            labelPlacement="parallel"
            colorScale={["#66FF00", "yellow", "#F79500", "red"]}
            labels={({ datum }) =>
              `${datum.x} : ${((datum.y / 19.011).toFixed(2) * 100).toFixed(
                0
              )}%`
            }
            labelRadius={30}
            style={{
              labels: { fill: "#282828", fontSize: 15, fontWeight: "bold" },
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Graphs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  chartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    marginLeft: 50,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
