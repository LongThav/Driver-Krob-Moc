import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SpeedScreen from '../../screens/daskboards/SpeedScreen/SpeedScreen';
import AssignedScreen from '../../screens/daskboards/AssignedScreen/AssignedScreen';
import {ColorApp} from '../../constants/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { goBack } from './Index';
import { fontSize } from '../../constants/FontSize';
import HistoryScreen from '../../screens/daskboards/HistoryScreen/HistoryScreen';

const stack = createStackNavigator();

const IndexTab = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="SpeedScreen"
        component={SpeedScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="AssignedScreen"
        component={AssignedScreen}
        options={{
          headerShown: false,
          title: 'Recently Assigned',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: fontSize.font18, 
            color: 'black', 
            fontWeight: "200"

          },
          headerStyle: {backgroundColor: ColorApp.bgColor},
          headerLeft: () => <View style={styles.leading}>
            <AntDesign 
            name='left' 
            size={20} 
            color={'grey'} 
            style={{marginTop: 4}}
            onPress={()=>{
              goBack();
            }}
            />
          </View>,
        }}
      />
    </stack.Navigator>
  );
};

export default IndexTab;

const styles = StyleSheet.create({
  leading: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 30 / 2,
    marginLeft: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
});

{
  /* navigation.goBack() */
}
