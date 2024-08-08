import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddTaskScreen = ({ navigation, route }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    route.params.addTask(taskTitle);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholderTextColor="#ffffff"
      />
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={handleAddTask}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000', // Container background color
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#ffffff'
  },
  button: {
    color: '#4d4d00',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTaskScreen;
