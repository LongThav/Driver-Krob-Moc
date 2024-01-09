import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor, whiteOpacity} from '../../constants/Color';
import {fontSize} from '../../constants/FontSize';
import {height, width} from '../../constants/WindowSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {goBack, replace} from '../../services/navigate/Index';
import Entypo from 'react-native-vector-icons/Entypo';

const CreateNewPassword = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!isVisible);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <View style={styles.btnBack}>
          <AntDesign
            onPress={() => {
              // goBack();
              replace('VerficationView');
            }}
            name="left"
            size={23}
            color={'grey'}
          />
        </View>
        <Text style={styles.txtForgotPassword}>Create New Password</Text>
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
            The new password must be different from previous password.
          </Text>
          <Text style={styles.txtPhoneNumber}>New Password</Text>
          <View
            style={[
              styles.frmPasswordMain,
              {
                borderWidth: password == '' ? 1 : 1,
                borderColor: password == '' ? 'grey' : btnColor,
              },
            ]}>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Create new Password"
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
          <Text style={styles.txtPhoneNumber}>Confirm New Password</Text>
          <View
            style={[
              styles.frmPasswordMain,
              {
                borderWidth: newPassword == '' ? 1 : 1,
                borderColor: newPassword == '' ? 'grey' : btnColor,
              },
            ]}>
            <TextInput
              secureTextEntry={!showPassword}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Confirm New Password"
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
              }}></View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                toggleVisibility();
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
                <Text style={styles.labelLogIn}>Save</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.modalView}>
              <View style={styles.alert}>
                <View style={styles.logo}>
                    <Image style={styles.mainImg} source={require('../../assets/check.png')}/>
                </View>
                <Text style={styles.txtTitle}>The password has been</Text>
                <Text style={styles.txtSubtitle}>successfully changed</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                    toggleVisibility();
                }}>
                <View style={styles.btnOk}>
                    <Text style={styles.txtOk}>Ok</Text>
                </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateNewPassword;

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
    marginTop: '5%',
    fontSize: fontSize.font18,
    color: 'black',
    marginHorizontal: '12%',
    fontWeight: '400',
  },
  frmPasswordMain: {
    backgroundColor: whiteOpacity,
    marginTop: 5,
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
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 25,
    marginHorizontal: 15,
  },
  labelLogIn: {
    color: 'white',
    fontSize: fontSize.font16,
    fontWeight: 'bold',
  },
  rowForm: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 30,
  },
  frm1: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 8,
  },
  frm2: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  frm3: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 8,
    marginRight: 8,
  },
  frm4: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 8,
  },
  txtResend: {
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    fontSize: fontSize.font16,
  },
  txtPhoneNumber: {
    marginTop: 20,
    fontSize: fontSize.font13,
    color: 'grey',
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: 15,
  },
  frmPasswordInput: {
    width: '85%',
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft: 15,
    color: 'black',
    fontSize: fontSize.font15,
    letterSpacing: 0.4,
  },
  modalContainer: {
    backgroundColor: '#ccc',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  modalView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  alert: {
    alignSelf: 'center',
    // marginHorizontal: '4z0%',
    width: '55%',
    maxWidth: 300,
    margin: 48,
    elevation: 24,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  alertTitle: {
    margin: 24,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  alertMessage: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    fontSize: 16,
    color: '#000',
  },
  alertButtonGroup: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 8,
    marginLeft: 24,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  alertButton: {
    marginTop: 12,
    marginRight: 8,
    width: 100,
  },
  logo:{
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: '10%'
  },
  mainImg:{
    flex: 1,
    width: undefined,
    height: undefined
  },
  txtTitle:{
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontSize: fontSize.font15,
  },
  txtSubtitle:{
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
    fontSize: fontSize.font15,
    marginTop: 5
  },
  btnOk:{
    paddingVertical: 8,
    backgroundColor: btnColor,
    marginHorizontal: '16%',
    marginBottom: '12%',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  txtOk:{
    color: 'white',
    fontSize: fontSize.font18,
  }
});
