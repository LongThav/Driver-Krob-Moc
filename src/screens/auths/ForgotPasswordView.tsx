import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor, whiteOpacity} from '../../constants/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {goBack, replace} from '../../services/navigate/Index';
import {fontSize} from '../../constants/FontSize';
import {height, width} from '../../constants/WindowSize';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordView = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnBack}>
          <AntDesign name="left" size={23} color={'grey'} />
        </TouchableOpacity>
        <Text style={styles.txtForgotPassword}>Forgot Password</Text>
        <View style={styles.img}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/small_logo.png')}
          />
        </View>
      </View>
      <KeyboardAvoidingView style={{height: '70%'}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text style={styles.txtTitleBody}>
            Please enter your phone number to reset your password
          </Text>
          <View
            style={[
              styles.frmPasswordMain,
              {
                borderWidth: phone == '' ? 1 : 1,
                borderColor: phone == '' ? btnColor : 'black',
              },
            ]}>
            <TextInput
              keyboardType="number-pad"
              onChangeText={value => {
                console.log('The value: ', value);
                setPhone(value);
              }}
              placeholder="Your Phone Number"
              placeholderTextColor={'grey'}
              style={styles.frmPhoneNumber}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              replace('VerficationView');
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
                <Text style={styles.labelLogIn}>Continue</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPasswordView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    backgroundColor: ColorApp.greenOpacity,
    height: '28%',
    // flexDirection: 'row',
    // justifyContent: 'center'
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
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  txtForgotPassword: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: fontSize.font18,
    color: 'black',
  },
  img: {
    marginTop: 10,
    width: width * 0.33,
    height: height * 0.15,
    // backgroundColor: 'blue',
    alignSelf: 'center',
  },
  txtTitleBody: {
    textAlign: 'center',
    marginTop: '10%',
    fontSize: fontSize.font18,
    color: 'black',
    marginHorizontal: '12%',
    fontWeight: '400',
  },
  frmPasswordMain: {
    backgroundColor: whiteOpacity,
    marginTop: '10%',
    // paddingLeft: 13,
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  frmPhoneNumber: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    paddingLeft: 13,
    borderRadius: 8,
    fontSize: fontSize.font14,
  },
  btnLogin: {
    textAlign: 'center',
    backgroundColor: btnColor,
    height: 48,
    marginTop: '11%',
    marginBottom: '5%',
    borderRadius: 25,
    marginHorizontal: 15,
  },
  labelLogIn: {
    color: 'white',
    fontSize: fontSize.font16,
    fontWeight: 'bold',
  },
});
