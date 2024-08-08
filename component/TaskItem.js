import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onToggleComplete(task.id)}>
        <Text style={[styles.taskText, task.completed && styles.completed]}>{task.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  taskText: {
    fontSize: 18,
    color: '#ffffff'
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#adad85'
  },
  deleteText: {
    color: 'red'
  }
});

export default TaskItem;
