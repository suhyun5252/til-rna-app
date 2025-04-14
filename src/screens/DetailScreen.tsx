import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// route 에 추가적으로 우리가 만든 prop 전달하기
type RootStackParamList = {
  Details: {userId: number};
};
type DetailRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>상세화면입니다.</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default DetailScreen;
