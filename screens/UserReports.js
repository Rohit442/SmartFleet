import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { firebase } from "../firebase";

const ViewReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports data from Firestore on component mount
    const fetchReports = async () => {
      try {
        const reportsSnapshot = await firebase
          .firestore()
          .collection("reports")
          .get();
        const reportsData = reportsSnapshot.docs.map((doc) => doc.data());
        setReports(reportsData);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>
      <ScrollView style={styles.scrollview}>
        <FlatList
          data={reports}
          renderItem={({ item }) => (
            <View style={styles.reportContainer}>
              <Text style={styles.Location}>Location: {item.Location}</Text>
              <Text style={styles.Description}>
                Description: {item.Description}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  reportContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
  },
  Location: {
    fontSize: 16,
    marginBottom: 8,
  },
  Description: {
    fontSize: 14,
    color: "#666",
  },
});

export default ViewReports;
