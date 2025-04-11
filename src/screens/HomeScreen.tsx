import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}): JSX.Element => {
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
        <Button
          title={'TodoList 로 이동'}
          onPress={() => navigation.navigate('TodoList')}
        />
        <Button
          title={'Popup 로 이동'}
          onPress={() => navigation.navigate('Popup')}
        />
        <Button
          title={'FlatList 로 이동'}
          onPress={() => navigation.navigate('FlatList')}
        />
        <Button
          title={'AsyncStorage 로 이동'}
          onPress={() => navigation.navigate('AsyncStorage')}
        />
        <Button
          title={'Test 로 이동'}
          onPress={() => navigation.navigate('Test')}
        />
      </View>
    </SafeAreaView>
  );
};

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
export default HomeScreen;
