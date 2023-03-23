import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const WorkConfirmation = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", confirmed: false },
    { id: 2, title: "Task 2", confirmed: false },
    { id: 3, title: "Task 3", confirmed: false },
    { id: 4, title: "Task 4", confirmed: false },
    { id: 5, title: "Task 5", confirmed: false },
    { id: 6, title: "Task 6", confirmed: false },
    { id: 7, title: "Task 7", confirmed: false },
    { id: 8, title: "Task 8", confirmed: false },
    { id: 9, title: "Task 9", confirmed: false },
  ]);

  const handleConfirmation = (taskId) => {
    Alert.alert(
      "Confirm Completion",
      `Do you want to confirm completion of ${tasks[taskId - 1].title}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            const updatedTasks = [...tasks];
            updatedTasks[taskId - 1].confirmed = true;
            setTasks(updatedTasks);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <View key={task.id} style={styles.taskContainer}>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              task.confirmed && styles.confirmedButton,
              !task.confirmed &&
                index > 0 &&
                !tasks[index - 1].confirmed &&
                styles.disabledButton,
            ]}
            disabled={task.confirmed}
            onPress={() => handleConfirmation(task.id)}
          >
            <Text
              style={[
                styles.buttonText,
                task.confirmed && styles.disabledButtonText,
              ]}
            >
              {task.confirmed ? "Confirmed" : "Complete"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#282828",
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  taskTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    opacity: 1,
  },
  confirmedButton: {
    backgroundColor: "green",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#282828",
    fontWeight: "bold",
  },
  disabledButtonText: {
    color: "rgba(255, 255, 255, 0.5)",
  },
});

export default WorkConfirmation;
