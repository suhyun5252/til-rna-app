import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
// 아이콘
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'front', // 메뉴 보여주는 옵션
          // headerShown: false,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            drawerLabel: '홈 화면',
            drawerIcon: ({color, size}) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
            drawerActiveTintColor: 'red',
            drawerInactiveTintColor: 'gray',
            headerStyle: {backgroundColor: 'skyblue'},
            headerTintColor: '#FFF',
          }}
        />
        <Drawer.Screen name="Details" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
