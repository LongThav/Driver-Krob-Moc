import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor, whiteOpacity} from '../../constants/Color';
import {fontSize} from '../../constants/FontSize';
import {height, width} from '../../constants/WindowSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {goBack, replace} from '../../services/navigate/Index';
import {useNavigation} from '@react-navigation/native';

const VerficationView = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [getOtp, setOTP] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <View style={styles.btnBack}>
          <AntDesign
            onPress={() => {
              replace('ForgotPasswordView');
            }}
            name="left"
            size={23}
            color={'grey'}
          />
        </View>
        <Text style={styles.txtForgotPassword}>Verification</Text>
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
            Please enter OTP code sent to 0889246027
          </Text>
          <View style={styles.rowForm}>
            <View style={styles.frm1}></View>
            <View style={styles.frm2}></View>
            <View style={styles.frm3}></View>
            <View style={styles.frm4}></View>
          </View>
          <Text style={styles.txtResend}>Resend</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              replace('CreateNewPassword');
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
                <Text style={styles.labelLogIn}>Verify</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default VerficationView;

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
    zIndex:1
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
  rowForm:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 30
  },
  frm1:{
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 8
  },
  frm2:{
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 8,
    marginHorizontal: 8
  },
  frm3:{
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 8,
    marginRight: 8
  },
  frm4:{
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 8
  },
  txtResend:{
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    fontSize: fontSize.font16
  }
});
