import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import Entypo from 'react-native-vector-icons/Entypo';

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPasssword] = useState(false);
  const OldPasswords = () => {
    setOldPassword(!oldPassword);
  };

  const NewPasswords = () => {
    setNewPasssword(!newPassword);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.frmmOldPassword}>
        <Text style={styles.txtOldPasssword}>Old Password</Text>
        <View style={styles.frmOldPassword}>
          <TextInput
            placeholder="*********"
            secureTextEntry={!oldPassword}
            placeholderTextColor={'black'}
            style={{padding: 0, color: 'black', fontSize: 14}}
          />
          <Entypo
            onPress={OldPasswords}
            name={oldPassword ? 'eye-with-line' : 'eye'}
            color={'grey'}
            size={25}
          />
        </View>
      </View>
      <View style={styles.frmmOldPassword}>
        <Text style={styles.txtOldPasssword}>New Password</Text>
        <View style={styles.frmOldPassword}>
          <TextInput
            placeholder = {'Input New Password'}
            // secureTextEntry={!oldPassword}
            placeholderTextColor={'black'}
            style={{padding: 0, color: 'black', fontSize: 14}}
          />
        </View>
      </View>
      <View style={styles.frmmOldPassword}>
        <Text style={styles.txtOldPasssword}>Confirm New Password</Text>
        <View style={styles.frmOldPassword}>
          <TextInput
            placeholder = {'Input Confirm New Password'}
            // secureTextEntry={!oldPassword}
            placeholderTextColor={'black'}
            style={{padding: 0, color: 'black', fontSize: 14}}
          />
        </View>
      </View>
      <View style = {styles.bottom}>
        <Text style = {styles.btnSave}>Save</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  frmmOldPassword: {
    marginTop: 20,
    marginHorizontal: 18,
  },
  txtOldPasssword: {
    fontSize: fontSize.font14,
    color: 'black',
  },
  frmOldPassword: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
  },
  bottom:{
    padding: 12,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSave:{
    width: '100%',
    paddingVertical :15,
    backgroundColor: btnColor,
    borderRadius: 28,
    textAlign: 'center',
    color: 'white',
    fontSize: fontSize.font16,
    fontWeight: '500'
  }
});
