import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../screens/auths/Welcome_screen';
import LanguageScreen from '../../screens/auths/Language_screen';
import LoginScreen from '../../screens/auths/LoginScreen';
import MainIndexView from '../../screens/daskboards/MainIndexView';
import ForgotPasswordView from '../../screens/auths/ForgotPasswordView';
import VerficationView from '../../screens/auths/VerficationView';
import CreateNewPassword from '../../screens/auths/CreateNewPassword';
import BottomBar from './BottomBar';
import StatusScreen from '../../screens/daskboards/AssignedScreen/StatusScreen';
import CommissionHistory from '../../screens/daskboards/SpeedScreen/CommissionHistory';
import {ColorApp} from '../../constants/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {goBack} from './Index';
import CommissinDetailScreen from '../../screens/daskboards/SpeedScreen/CommissinDetailScreen';
import MapScreen from '../../screens/daskboards/SpeedScreen/MapScreen';
import DetailHostoryScreen from '../../screens/daskboards/HistoryScreen/DetailHistoryScreen';
import MapHistoryScreen from '../../screens/daskboards/HistoryScreen/MapHistoryScreen';
import SearchBarHistoryScreen from '../../screens/daskboards/HistoryScreen/SearchBarHistoryScreen';
import StyleScreen from '../../components/StyleScreen';
import DetailJobScreen from '../../screens/daskboards/MyJobScreen/DetailJobScreen';
import DetailStatusScreen from '../../screens/daskboards/AssignedScreen/DetailStatusScreen';
import DetailAssignedSpeeedScreen from '../../screens/daskboards/SpeedScreen/DetailAssignedSpeeedScreen';
import AssignedAccountScreen from '../../screens/daskboards/AccountScreen/AssignedAccountScreen';
import AcceptScreen from '../../screens/daskboards/SpeedScreen/AcceptScreen';
import EditAccount from '../../screens/daskboards/AccountScreen/EditAccount';
import ChangePasswordScreen from '../../screens/daskboards/AccountScreen/ChangePasswordScreen';
import TestScreen from '../../screens/daskboards/TestScreen';
import AboutUsScreen from '../../screens/daskboards/AccountScreen/AboutUsScreen';
import ContactScreen from '../../screens/daskboards/AccountScreen/ContactScreen';
import SettingScreen from '../../screens/daskboards/AccountScreen/SettingScreen';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
      <Stack.Screen component={LanguageScreen} name="LanguageScreen" />
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={MainIndexView} name="MainIndexView" />
      <Stack.Screen component={ForgotPasswordView} name="ForgotPasswordView" />
      <Stack.Screen component={VerficationView} name="VerficationView" />
      <Stack.Screen component={CreateNewPassword} name="CreateNewPassword" />
      <Stack.Screen component={BottomBar} name="BottomBar" />
      <Stack.Screen component={StatusScreen} name="StatusScreen" />
      <Stack.Screen
        component={CommissionHistory}
        name="CommissionHistory"
        options={{
          headerShown: true,
          title: 'Commission History',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'black'},
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={CommissinDetailScreen}
        name="CommissinDetailScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Detail',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={MapScreen}
        name="MapScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Map',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={DetailHostoryScreen}
        name="DetailHostoryScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Detail',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={MapHistoryScreen}
        name="MapHistoryScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Map',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={SearchBarHistoryScreen}
        name="SearchBarHistoryScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Search',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={StyleScreen}
        name="StyleScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Search',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={DetailJobScreen}
        name="DetailJobScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Detail',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={DetailStatusScreen}
        name="DetailStatusScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Detail',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={DetailAssignedSpeeedScreen}
        name="DetailAssignedSpeeedScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Detail',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={AssignedAccountScreen}
        name="AssignedAccountScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'My Delivery',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={AcceptScreen}
        name="AcceptScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Accepted',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen component={EditAccount} name="EditAccount" />
      <Stack.Screen
        component={ChangePasswordScreen}
        name="ChangePasswordScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Change Password',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={TestScreen}
        name="TestScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Test Screen',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={AboutUsScreen}
        name="AboutUsScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'About Us',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={ContactScreen}
        name="ContactScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Contact Us',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        component={SettingScreen}
        name="SettingScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {color: 'black'},
          title: 'Setting',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: ColorApp.bgColor,
          },
          headerLeft: () => {
            return (
              <View style={styles.btnBack}>
                <AntDesign
                  name="left"
                  size={20}
                  color={'grey'}
                  onPress={() => {
                    goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  appBarCommission: {
    backgroundColor: ColorApp.bgColor,
  },
  btnBack: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 35 / 2,
    marginLeft: 15,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
  },
});

// https://medium.com/@islamrustamov/building-animations-with-rn-reanimated-v2-swipeable-button-8115075135ed
