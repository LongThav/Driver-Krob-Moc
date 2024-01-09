import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AssignedScreen from '../../screens/daskboards/AssignedScreen/AssignedScreen';
import MyJobScreen from '../../screens/daskboards/MyJobScreen/MyJobScreen';
import SpeedScreen from '../../screens/daskboards/SpeedScreen/SpeedScreen';
import HistoryScreen from '../../screens/daskboards/HistoryScreen/HistoryScreen';
import AccoutScreen from '../../screens/daskboards/AccountScreen/AccoutScreen';
import BottomBarCompo from '../../components/BottomBar';
import CustomTabBar from '../../components/CustomTabBar';
import IndexTab from './IndexTab';

const Tab = createBottomTabNavigator();
const BottomBar = () => {
  return (
    <Tab.Navigator
       initialRouteName='Speed'
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        component={AssignedScreen}
        name="Assigned"
      />
      <Tab.Screen
        component={MyJobScreen}
        name="My Job"
      />
      <Tab.Screen
        component={IndexTab}
        name="Speed"
      />
      <Tab.Screen
        component={HistoryScreen}
        name="History"
      />
      <Tab.Screen
        component={AccoutScreen}
        name="Account"
      />
    </Tab.Navigator>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  customizeBottomBar: {
    width: '100%',
    height: 80,
  },
});
