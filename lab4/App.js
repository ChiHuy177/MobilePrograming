import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import Favorite from './components/Favorite';
const Stack = createStackNavigator();

function FavoriteScreen() {
  return (
    
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    
  );
}
function DetailScreen() {
  return (
    
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="Favorite" component={UserList} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    
  );
}
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Contacts" // Đảm bảo tên này trùng với màn hình đã đăng ký
      barStyle={{ backgroundColor: 'blue' }}
      labeled={false}>
      <Tab.Screen
        name="Contacts"
        component={DetailScreen}
        options={{
          tabBarIcon: 'format-list-bulleted',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: 'star-check',
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
export default App;
