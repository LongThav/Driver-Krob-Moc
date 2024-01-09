import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import { navigationRef } from './Index';

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <StatusBar backgroundColor={'#16247d'}></StatusBar> */}
      <MainStack/>
    </NavigationContainer>
  )
}

export default Route;

const styles = StyleSheet.create({})