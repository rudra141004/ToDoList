// ToDoList.js
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
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ToDoList;
