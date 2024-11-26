// src/components/ToDoList.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => (
  <View style={styles.listContainer}>
    {tasks.map((task, index) => (
      <Text key={index} style={styles.taskItem}>
        {task}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
  taskItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ToDoList;
