import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function TodoList() {
  // 입력중인 할일 state
  const [task, setTask] = useState('');
  // 할일 목록 state
  const [taskList, setTaskList] = useState<string[]>([]);
  // 할일 추가 핸들러
  const handleAddTask = () => {
    if (task.trim() === '') {
      Alert.alert('할일을 입력하세요.');
      return;
    }
    setTaskList(prev => [...taskList, task]);
    setTask('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={[styles.container, styles.view]}>
          <Text style={styles.title}>🎁 오늘할일</Text>
          {/* 할일 입력 */}
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={task}
              onChangeText={setTask}
              placeholder="할일을 입력해주세요."
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddTask()}>
              <Text style={styles.addButtonText}>추가</Text>
            </TouchableOpacity>
          </View>
          {/* 할일 목록 */}
          <ScrollView style={styles.list}>
            {taskList.map((item, index) => (
              <Text key={index} style={styles.taskItem}>
                - {item}
              </Text>
            ))}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  view: {
    width: '100%',
    padding: 24,
    paddingTop: 50,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    marginLeft: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  taskItem: {
    fontSize: 16,
    marginBottom: 12,
  },
});
