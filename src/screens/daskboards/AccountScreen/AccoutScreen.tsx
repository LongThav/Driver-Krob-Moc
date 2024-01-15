import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../../../services/navigate/Index';

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

const questinoYesOrNo = ['No', 'Yes'];

const AccoutScreen = () => {
  const [showDialog, setShowDialog] = useState(false);

  const showDialogs = () => {
    return setShowDialog(dialog => !dialog);
  };

  console.log('Show dialog: ', showDialog);
  

  return (
    <View style={styles.container}>
      <FlatList
        style={{flex: 1}}
        // alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        data={[1]}
        renderItem={item => {
          return (
            <View style={{marginBottom: '25%'}}>
              <View style={styles.cover} />
              <Text style={styles.txtAccount}>My Account</Text>
              <View style={styles.cardProfile}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bgImg}>
                    <Image
                      style={{flex: 1, height: undefined, width: undefined}}
                      source={require('../../../assets/profile.png')}
                    />
                  </View>
                  <View style={{marginLeft: 20}}>
                    <Text style={styles.txtName}>Sokha Pen</Text>
                    <Text style={styles.txtCode}>Code: 000123</Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    console.log('Prress');
                    navigate('EditAccount');
                  }}
                  style={styles.circleEdit}>
                  <FontAwesome
                    // onPress={()=>{
                    //   navigate('StyleScreen')
                    // }}
                    name="edit"
                    color={ColorApp.puple}
                    size={16}
                    style={{marginTop: 9, marginLeft: 3}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.rowTxt}>
                <Text style={styles.txtDelivery}>My Delivery</Text>
                <Text
                  onPress={() => {
                    navigate('AssignedAccountScreen');
                  }}
                  style={styles.txtSeeAll}>
                  See All
                </Text>
              </View>
              <View>
                <FlatList
                  style={{marginHorizontal: 15}}
                  numColumns={2}
                  scrollEnabled={false}
                  data={deliverBox}
                  showsVerticalScrollIndicator={false}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.gride}
                        onPress={() => {
                          console.log(index);
                          if (item.title == 'Assigned') {
                            navigate('AssignedAccountScreen');
                            console.log("Can't press");
                          } else {
                            console.log("Can't navigate");
                          }
                        }}>
                        <Text style={styles.txtTotal}>{item.total}</Text>
                        <Text style={styles.txtTitle}>{item.title}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <Text style={styles.txtkablib}>About KALIB</Text>
              <View>
                <FlatList
                  style={{marginHorizontal: 15, marginTop: 15}}
                  numColumns={2}
                  data={KalibBox}
                  scrollEnabled={false}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.gride}
                        onPress={() => {
                          console.log(index);
                          if (index == 0) {
                            console.log('About us');
                            navigate('AboutUsScreen');
                          } else if (index == 3) {
                            console.log('Contact Us');
                            navigate('ContactScreen');
                          } else {
                            console.log('Something else');
                          }
                        }}>
                        <Image source={item.icon} style={{marginBottom: 4}} />
                        <Text style={styles.txtTitle}>{item.title}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <Text style={styles.txtkablib}>Other</Text>
              <View>
                <FlatList
                  style={{marginHorizontal: 15, marginTop: 15}}
                  numColumns={2}
                  scrollEnabled={false}
                  data={otherBox}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                          if (index == 1) {
                            navigate('ChangePasswordScreen');
                          }else{
                            console.log('Setting');
                            navigate('SettingScreen')
                          }
                        }}
                        style={styles.gridII}>
                        <Image source={item.icon} style={{marginBottom: 4}} />
                        <Text style={styles.txtTitle}>{item.title}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnLogout}
                onPress={() => {
                  showDialogs();
                }}>
                <Ionicons
                  onPress={() => {
                    navigate('CustomButton');
                  }}
                  size={23}
                  name="log-out-outline"
                  color={ColorApp.puple}
                />
                <Text
                  style={{
                    fontSize: fontSize.font16,
                    marginLeft: 10,
                    color: ColorApp.puple,
                    fontWeight: '500',
                  }}>
                  Sign Out
                </Text>
              </TouchableOpacity>
              <Modal
                visible={showDialog}
                animationType="fade"
                transparent={true}>
                <View style={styles.modalView}>
                  <View style={styles.alert}>
                    <Image
                      source={require('../../../assets/question_mark.png')}
                    />
                    <Text style={styles.txtFirstLine}>Are you sure,</Text>
                    <Text style={styles.txtFirstLine}>
                      you want to Sign Out?
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '100%',
                        marginTop: 20,
                      }}>
                      {questinoYesOrNo.map((e, index) => {
                        return (
                          <Text
                            onPress={() => {
                              if (index === 0) {
                                showDialogs();
                              } else {
                              }
                            }}
                            key={index}
                            style={[
                              styles.btnQuestion,
                              {
                                backgroundColor:
                                  index == 1 ? ColorApp.puple : 'white',
                                color: index == 1 ? 'white' : ColorApp.puple,
                                borderWidth: index == 0 ? 1 : 0,
                                borderColor:
                                  index == 0 ? ColorApp.puple : 'white',
                                fontSize: fontSize.font14,
                              },
                            ]}>
                            {e}
                          </Text>
                        );
                      })}
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          );
        }}
      />
    </View>
  );
};

export default AccoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  cover: {
    height: '14%',
    backgroundColor: ColorApp.cardColor,
    position: 'absolute',
    width: '100%',
  },
  txtAccount: {
    textAlign: 'center',
    marginTop: 15,
    color: 'white',
    fontSize: fontSize.font18,
    fontWeight: '500',
    opacity: 0.8,
  },
  cardProfile: {
    marginHorizontal: 15,
    paddingVertical: 12,
    paddingHorizontal: 17,
    backgroundColor: 'white',
    marginTop: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  bgImg: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 50 / 2,
  },
  circleEdit: {
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    backgroundColor: '#fde7f3',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  txtName: {
    color: 'black',
    fontSize: fontSize.font16,
  },
  txtCode: {
    paddingTop: 2,
    color: 'black',
    fontSize: fontSize.font15,
  },
  rowTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
    marginTop: 19,
  },
  txtDelivery: {
    fontSize: fontSize.font16,
    color: 'black',
    fontWeight: '400',
  },
  txtSeeAll: {
    color: ColorApp.puple,
    fontWeight: '400',
    fontSize: fontSize.font16,
  },
  gride: {
    width: '49%',
    height: 90,
    backgroundColor: 'white',
    marginBottom: 9,
    borderRadius: 12,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 22.5,
  },
  txtTotal: {
    fontSize: fontSize.font15,
    color: ColorApp.puple,
    fontWeight: '500',
    paddingBottom: 5,
  },
  txtTitle: {
    color: 'grey',
    fontSize: fontSize.font15,
    fontWeight: '500',
  },
  txtkablib: {
    marginLeft: 15,
    marginTop: 15,
    color: 'black',
    fontSize: fontSize.font16,
    paddingBottom: 10,
  },
  gridII: {
    width: '49%',
    height: 90,
    backgroundColor: 'white',
    marginBottom: 9,
    borderRadius: 12,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 22.5,
  },
  btnLogout: {
    paddingVertical: 12,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 25,
  },
  modalView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alert: {
    alignSelf: 'center',
    marginHorizontal: '10%',
    paddingVertical: '5%',
    width: '90%',
    // maxWidth: width,
    margin: 48,
    elevation: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFirstLine: {
    fontSize: fontSize.font15,
    marginTop: 13,
    color: 'black',
  },
  btnQuestion: {
    width: '40%',
    paddingVertical: 13,
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 25,
  },
});
