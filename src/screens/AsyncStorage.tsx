import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function TestScreen() {
  const [name, setName] = useState('');
  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('user_name', name);
      Alert.alert('저장완료');
    } catch (error) {
      console.log(error);
    }
  };
  //   데이터 읽어오기
  const loadData = async () => {
    try {
      const res = await AsyncStorage.getItem('user_name');
      console.log(`불러오기 결과 : ${res}`);
      if (res !== null) {
        setName(res);
        Alert.alert('불러오기 성공');
      }
    } catch (error) {
      console.log('불러오기 오류', error);
    }
  };
  //   마운트시 읽어오기
  useEffect(() => {
    loadData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {width: '100%'}]}>
        <Text>간단 저장 및 읽어오기</Text>
        <TextInput
          style={styles.input}
          placeholder="이름입력"
          value={name}
          onChangeText={setName}
        />
        <Button title="이름저장" onPress={() => handleSave()} />
        <Text>저장된 이름 :{name}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderWidth: 3,
    padding: 3,
  },
});
