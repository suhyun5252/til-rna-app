import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function ProfileScreen() {
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [submitted, setSubmmited] = useState(false);

  const handlePress = () => {
    if (name.trim() === '' || introduce.trim() === '') {
      Alert.alert('입력 오류', '이름과 소개를 입력해주세요.', [{text: '확인'}]);
      return;
    }
    setSubmmited(true);
    Alert.alert('환영합니다.', `${name}님 환영합니다.`, [{text: '확인'}]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {width: '100%'}]}>
        {/* 로컬 이미지는 require 사용 */}
        <Image
          source={{uri: 'https://picsum.photos/200/300?random=1'}}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="이름을 입력하세요."
        />
        <TextInput
          style={styles.input}
          value={introduce}
          onChangeText={setIntroduce}
          multiline
          placeholder="자기소개를 입력하세요."
        />
        <Button title="나의 프로필" onPress={handlePress} />
        {submitted && (
          <View>
            <Text>{name}</Text>
            <Text>{introduce}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // 전체 너비 차지
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  resultBox: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
  },
});

export default ProfileScreen;
