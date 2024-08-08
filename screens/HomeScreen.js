import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import TaskItem from '../component/TaskItem';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true }
  ]);

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, { id: Date.now(), title: task, completed: false }]);
  };

  return (
    <View style={styles.container}>
      
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
        )}
      />
      <Button title="Add Task" color="#4d4d00" onPress={() => navigation.navigate('Add Task', { addTask: handleAddTask })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000', // Change background color here
  }
});

export default HomeScreen;
