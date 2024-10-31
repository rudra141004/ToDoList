import React from 'react';
import { Pressable, View, Text, ScrollView, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <View style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.taskItem}>
          {task}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // For Android shadow effect
  },
  taskItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default ToDoList;
