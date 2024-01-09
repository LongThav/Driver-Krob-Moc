import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {ColorApp, btnColor} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {goBack, navigate} from '../../../services/navigate/Index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {height} from '../../../constants/WindowSize';
import AntDesign from 'react-native-vector-icons/AntDesign';

const deliverBox = [
  {
    id: '1',
    total: '15',
    title: 'Assigned',
  },
  {
    id: '2',
    total: '12',
    title: 'In Delivery',
  },
  {
    id: '3',
    total: '12',
    title: 'Completed',
  },
  {
    id: '4',
    total: '12',
    title: 'Rejected',
  },
];

const KalibBox = [
  {
    id: '1',
    title: 'About Us',
    icon: require('../../../assets/about.png'),
  },
  {
    id: '2',
    title: 'Privacy Policy',
    icon: require('../../../assets/privacy.png'),
  },
  {
    id: '3',
    title: 'Terms of Use',
    icon: require('../../../assets/term.png'),
  },
  {
    id: '4',
    title: 'Contact Us',
    icon: require('../../../assets/contact.png'),
  },
];

const otherBox = [
  {
    id: '1',
    title: 'Setting',
    icon: require('../../../assets/setting.png'),
  },
  {
    id: '2',
    title: 'Change Password',
    icon: require('../../../assets/change_password.png'),
  },
];

const EditAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardCover}>
        <View style={styles.btnBack}>
          <AntDesign
            name="left"
            size={20}
            color={'white'}
            onPress={() => {
              goBack();
            }}
          />
        </View>
        <Text style={styles.txtEditProfile}>Edit Profile</Text>
        <View style={styles.box}>
          <View style={styles.bgImg}>
            <Image
              style={{flex: 1, height: undefined, width: undefined}}
              source={require('../../../assets/profile.png')}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.txtName}>Sokha Pen</Text>
            <Text style={styles.txtCode}>Code:000123</Text>
          </View>
          <View style={styles.circleCamera}>
            <FontAwesome size={10} color={'white'} name="camera" />
          </View>
        </View>
      </View>
      <View style={{marginTop: '13%'}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txt}>Name</Text>
        <View style={styles.frmName}>
          <TextInput
            placeholderTextColor={'black'}
            placeholder="Sokha Pen"
            style={{color: 'black', padding: 0, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 18}} />
        <Text style={styles.txt}>Gender</Text>
        <View style={styles.frmName}>
          <TextInput
            placeholderTextColor={'black'}
            placeholder="Male"
            style={{color: 'black', padding: 0, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 18}} />
        <Text style={styles.txt}>Date of Birth</Text>
        <View style={styles.frmName}>
          <TextInput
            placeholderTextColor={'black'}
            placeholder="15 Now, 1988"
            style={{color: 'black', padding: 0, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 18}} />
        <Text style={styles.txt}>Phone Number</Text>
        <View style={styles.frmName}>
          <TextInput
            placeholderTextColor={'black'}
            placeholder="015 287 859"
            style={{color: 'black', padding: 0, width: '100%'}}
          />
        </View>
        <View style={styles.frmName}>
          <TextInput
            placeholderTextColor={'black'}
            placeholder="012 123 456"
            style={{color: 'black', padding: 0, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 18}} />
        <Text style={styles.txt}>Email</Text>
        <View style={styles.frmName}>
          <TextInput
            placeholderTextColor={'black'}
            placeholder="longthavsipav@gmail.com"
            style={{color: 'black', padding: 0, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 18}} />
        <Text style={styles.txt}>Address</Text>
        <View style={[styles.frmName]}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSize.font15,
              lineHeight: 23,
            }}>
            The Elysee Koh Pich, No. B3-005, St. De La Grande Allee, Phnom Penh
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  cardCover: {
    height: height * 0.16,
    backgroundColor: ColorApp.cardColor,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnBack: {
    width: 35,
    height: 35,
    backgroundColor: '#bc9dd1',
    borderRadius: 35 / 2,
    marginLeft: 15,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
    position: 'absolute',
    left: 0,
    top: 15,
    opacity: 0.8,
  },
  txtEditProfile: {
    color: 'white',
    marginTop: 20,
    fontSize: 17,
    fontWeight: '400',
  },
  box: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: 'white',
    position: 'absolute',
    width: '92%',
    marginHorizontal: 15,
    bottom: -35,
    borderRadius: 10,
    flexDirection: 'row',
  },
  bgImg: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 50 / 2,
  },
  txtName: {
    fontSize: fontSize.font15,
    color: 'black',
    fontWeight: '500',
  },
  txtCode: {
    fontSize: fontSize.font15,
    color: 'black',
    fontWeight: '400',
  },
  circleCamera: {
    width: 20,
    height: 20,
    backgroundColor: btnColor,
    borderRadius: 20 / 2,
    position: 'absolute',
    bottom: 10,
    left: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    marginLeft: 15,
    color: 'black',
    fontSize: fontSize.font14,
  },
  frmName: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 8,
    borderRadius: 12,
  },
});
