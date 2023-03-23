import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const vehicles = [
  {
    id: 1,
    name: "Vehicle 1",
    tasks: [
      { id: 1, name: "Task 1", completed: true },
      { id: 2, name: "Task 2", completed: true },
      { id: 3, name: "Task 3", completed: false },
    ],
  },
  {
    id: 2,
    name: "Vehicle 2",
    tasks: [
      { id: 4, name: "Task 4", completed: false },
      { id: 5, name: "Task 5", completed: false },
      { id: 6, name: "Task 6", completed: false },
    ],
  },
  {
    id: 3,
    name: "Vehicle 3",
    tasks: [
      { id: 7, name: "Task 7", completed: true },
      { id: 8, name: "Task 8", completed: true },
      { id: 9, name: "Task 9", completed: true },
    ],
  },
];

const CompletedTasks = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.vehicleButton,
        selectedVehicle === item && styles.selectedVehicleButton,
      ]}
      onPress={() => setSelectedVehicle(selectedVehicle === item ? null : item)}
    >
      <Text
        style={[
          styles.vehicleButtonText,
          selectedVehicle === item && styles.selectedVehicleButtonText,
        ]}
      >
        {item.name}
      </Text>
      {selectedVehicle === item && (
        <View style={styles.taskList}>
          {item.tasks.map((task) => (
            <View
              key={task.id}
              style={[
                styles.taskItem,
                task.completed && styles.completedTaskItem,
              ]}
            >
              <Text
                style={[
                  styles.taskText,
                  task.completed && styles.completedTaskText,
                ]}
              >
                {task.name}
              </Text>
              {task.completed && (
                <Icon name="check-circle" size={20} color="#4caf50" />
              )}
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedVehicle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#282828",
  },
  vehicleButton: {
    backgroundColor: "#29AB87",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    justifyContent: "center",
  },
  selectedVehicleButton: {
    backgroundColor: "#29AB87",
  },
  vehicleButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  selectedVehicleButtonText: {
    color: "#fff",
  },
  taskList: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 5,
  },
  vehicleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    border: 1,
  },
  completedTaskItem: {
    backgroundColor: "#c8e6c9",
  },
  taskText: {
    fontSize: 16,
  },
  tickIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "green",
  },
});
export default CompletedTasks;
