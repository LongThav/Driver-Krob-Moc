import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {splashScreen1} from '../../constants/img';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {goBack, push, replace} from '../../services/navigate/Index';
import {fontSize} from '../../constants/FontSize';
import {btnColor, whiteOpacity} from '../../constants/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ImageBackground source={splashScreen1} style={styles.imgBg}>
      <KeyboardAvoidingView
        behavior={'height'}
        // keyboardVerticalOffset={25}
        style={styles.container}>
        <View style={styles.btnBack}>
          <AntDesign
            onPress={() => {
              goBack();
            }}
            name="left"
            size={23}
            color={'white'}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/logo.png')}
              style={{flex: 1, height: undefined, width: undefined}}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.txtLogin}>LOG IN</Text>
            <Text style={styles.txtSubtitle}>
              Log in with your phone number and password to continue
            </Text>
            <Text style={[styles.txtPhoneNumber]}>Phone number</Text>
            <View
              style={[
                styles.frmPasswordMain,
                {
                  borderWidth: phone == '' ? 1 : 0,
                  borderColor: phone == '' ? btnColor : 'white',
                },
              ]}>
              <TextInput
                onChangeText={value => {
                  console.log('The value: ', value);
                  setPhone(value);
                }}
                placeholder="Your Phone Number"
                placeholderTextColor={'grey'}
                style={styles.frmPhoneNumber}
              />
            </View>
            <Text style={styles.txtPhoneNumber}>Password</Text>
            <View
              style={[
                styles.frmPasswordMain,
                {
                  borderWidth: password == '' ? 1 : 0,
                  borderColor: password == '' ? btnColor : 'white',
                },
              ]}>
              <TextInput
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholder="Your Password"
                placeholderTextColor={'grey'}
                style={styles.frmPasswordInput}
              />
              <View
                style={{
                  width: '15%',
                  backgroundColor: 'white',
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo
                  onPress={toggleShowPassword}
                  name={showPassword ? 'eye-with-line' : 'eye'}
                  color={'grey'}
                  size={25}
                />
              </View>
            </View>
            <Text
              onPress={() => {
                console.log('Press');
                push('ForgotPasswordView');
              }}
              style={styles.txtForgotpassword}>
              Forgot Password
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                replace('BottomBar');
              }}>
              <View style={styles.btnLogin}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: btnColor,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.labelLogIn}>Log In</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    // position: 'absolute'
  },
  btnBack: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: 'white',
    opacity: 0.5,
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.39,
    height: height * 0.17,
    alignSelf: 'center',
  },
  box: {
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.06,
    backgroundColor: whiteOpacity,
    opacity: 0.65,
    marginHorizontal: 15,
    marginTop: height * 0.07,
    borderRadius: 13,
    // justifyContent: 'center',
    // alignItems: "center"
  },
  txtLogin: {
    color: 'black',
    fontWeight: '500',
    fontSize: 25,
    textAlign: 'center',
  },
  txtSubtitle: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
    fontSize: fontSize.font15,
    color: 'black',
    fontWeight: '600',
    alignItems: 'center',
    marginHorizontal: '10%',
  },
  txtPhoneNumber: {
    marginTop: 20,
    fontSize: fontSize.font13,
    color: 'black',
    fontWeight: '500',
    textAlign: 'left',
  },
  frmPhoneNumber: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    paddingLeft: 13,
    borderRadius: 8,
    fontSize: fontSize.font14,
  },
  frmPassword: {
    backgroundColor: whiteOpacity,
    color: 'black',
    marginTop: 10,
    paddingLeft: 13,
    borderRadius: 8,
    fontSize: fontSize.font14,
    letterSpacing: 0.5,
  },
  frmPasswordMain: {
    backgroundColor: whiteOpacity,
    marginTop: 10,
    // paddingLeft: 13,
    borderRadius: 8,
    flexDirection: 'row',
  },
  frmPasswordInput: {
    width: '85%',
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft: 15,
    color: 'black',
    fontSize: fontSize.font14,
    letterSpacing: 0.4,
  },
  txtForgotpassword: {
    textAlign: 'right',
    marginTop: 15,
    color: 'white',
  },
  btnLogin: {
    textAlign: 'center',
    backgroundColor: btnColor,
    height: 48,
    marginTop: 20,
    marginBottom: '5%',
    borderRadius: 25,
  },
  labelLogIn: {
    color: 'white',
    fontSize: fontSize.font16,
    fontWeight: 'bold',
  },
});
