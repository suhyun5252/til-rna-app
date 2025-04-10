import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  createTodo,
  deleteTodo,
  getTodos,
  TodosRow,
  updateTodo,
} from '../api/todo-api';
import {TextInput} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}: {navigation: any}): JSX.Element => {
  // 전체 목록 state
  const [todos, setTodos] = useState<TodosRow[]>([]);
  // 수정 관련 state
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  // 새글 관련 state
  const [newTitle, setNewTitle] = useState('');

  const fetchTodos = async () => {
    const res = await getTodos();
    if (!res) {
      console.log('데이터 호출 실패!');
      return;
    }
    const {data, error, status} = res;
    if (error) {
      console.log(error.message);
      return;
    }
    if (data) {
      console.log(status);
      setTodos(data);
    }
    console.log(data);
  };

  // 목록 삭제하기
  const handleDelete = async (id: number) => {
    const {data, error} = await deleteTodo(id);
    console.log(data);
    // 전체 목록 다시 받기
    fetchTodos();
  };

  // 목록 수정하기
  const handleEdit = async (id: number) => {
    if (editTitle.trim() === '') {
      Alert.alert('제목을 입력해주세요');
      return;
    }

    const {data, error, status} = await updateTodo(id, editTitle);
    console.log(data);
    setEditId(null);
    setEditTitle('');
    Alert.alert('제목이 수정되었습니다');
    fetchTodos();
  };

  // 새글 추가
  const handleAdd = async () => {
    if (newTitle.trim() === '') {
      Alert.alert('제목을 입력해주세요');
      return;
    }
    const {data, error, status} = await createTodo(newTitle);
    if (error) {
      console.log(error.message);
      return;
    }
    if (data) {
      console.log(status);
      setNewTitle('');
      fetchTodos();
    }
    console.log(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
        <Button
          title={'About 로 이동'}
          onPress={() => navigation.navigate('About')}
        />
        <Button
          title={'WebView 로 이동'}
          onPress={() => navigation.navigate('WebView')}
        />
        <Button
          title={'Profile 로 이동'}
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title={'CheckList 로 이동'}
          onPress={() => navigation.navigate('CheckList')}
        />
      </View>
      {/* 추가 */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <Button title="추가" color={'#0b72e0'} onPress={() => handleAdd()} />
      </View>

      {/* 목록 */}
      <ScrollView style={styles.todoList}>
        {todos.map(item => (
          <View key={item.id} style={styles.todoCard}>
            {editId === item.id ? (
              <View style={styles.todoButton}>
                <TextInput
                  style={styles.input}
                  value={editTitle}
                  onChangeText={setEditTitle}
                />
                <Button
                  title="취소"
                  color={'#c7c7c7'}
                  onPress={() => {
                    setEditId(null);
                  }}
                />
                <Button
                  title="저장"
                  color={'#4b74fc'}
                  onPress={() => handleEdit(item.id)}
                />
              </View>
            ) : (
              <>
                <Text style={styles.title}>
                  {item.title ? item.title : 'NoTitle'}
                </Text>
                <View style={styles.todoButton}>
                  <Button
                    title={'수정'}
                    color={'#4caf50'}
                    onPress={() => {
                      setEditId(item.id);
                      setEditTitle(item.title || '');
                    }}
                  />
                  <Button
                    title={'삭제'}
                    color={'#f44336'}
                    onPress={() => handleDelete(item.id)}
                  />
                </View>
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  todoList: {
    flex: 1,
    backgroundColor: 'white',
  },
  todoCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
  },
});
export default HomeScreen;
