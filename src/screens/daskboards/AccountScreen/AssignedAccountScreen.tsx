import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {navigate} from '../../../services/navigate/Index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const filter = ['All', 'Assigned', 'In Delivery'];

const AcceptedData = [
  {
    id: '1',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'In Delivery',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '2',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'assigned',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '3',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'assigned',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '4',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'In Delivery',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '5',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'assigned',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '6',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'assigned',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '7',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'In Delivery',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '8',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'In Delivery',
    icon: require('../../../assets/clothes.png'),
  },
];

const AssignedAccountScreen = () => {
  const [selectFilter, setSelectFilter] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const AlertDialog = () => {
    setShowDialog(dialog => !dialog);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowFilter}>
        {filter.map((e, index) => {
          return (
            <Text
              key={index}
              style={[
                styles.filterBtn,
                {
                  backgroundColor: selectFilter == index ? btnColor : 'white',
                  color: selectFilter == index ? 'white' : 'black',
                },
              ]}
              onPress={() => {
                setSelectFilter(index);
              }}>
              {e}
            </Text>
          );
        })}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.item}>
          {AcceptedData.map((e, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigate('DetailJobScreen');
                }}
                activeOpacity={0.8}
                key={index}
                style={[styles.cardRecntly, {marginTop: index == 0 ? 18 : 0}]}>
                <View style={styles.mainRowHead}>
                  <View style={styles.rowHead}>
                    <View
                      style={[
                        styles.circleIcon,
                        {
                          backgroundColor:
                            e.status == 'assigned'
                              ? btnColor
                              : ColorApp.cardColor,
                        },
                      ]}>
                      <Image source={e.icon} />
                    </View>
                    <Text style={styles.txtTitle}>{e.title}</Text>
                  </View>
                  <AntDesign
                    name="right"
                    size={25}
                    color={'#d6d6d6'}
                    style={{marginTop: 4}}
                  />
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#d6d6d6',
                    marginVertical: 10,
                  }}
                />
                <View style={styles.orderNumber}>
                  <Text style={styles.txtOrderNumber}>Order Number</Text>
                  <Text style={styles.valueOrderNumber}>
                    : {e.order_number}
                  </Text>
                </View>
                <View style={[styles.orderNumber, {marginTop: 13}]}>
                  <Text style={styles.txtOrderNumber}>Order Date</Text>
                  <Text style={styles.valueOrderNumber}>: {e.order_date}</Text>
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#d6d6d6',
                    marginVertical: 15,
                  }}
                />
                <View style={styles.rowAddress}>
                  <FontAwesome6
                    name="location-dot"
                    size={16}
                    color={ColorApp.cardColor}
                    style={{marginTop: 5}}
                  />
                  <Text style={styles.txtAddress}>{e.address}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
          <Modal visible={showDialog} animationType="fade" transparent={true}>
            <View style={styles.modalView}>
              <View style={styles.alertDialog}>
                <View style={styles.circle}>
                  <AntDesign
                    style={{width: 40, height: 40, borderRadius: 40 / 2}}
                    size={40}
                    name="checkcircle"
                    color={ColorApp.cardColor}
                  />
                </View>
                <Text style={styles.txtFill}>Please fill delivery code</Text>
                <Text style={styles.txtFill}>and Upload proof photo</Text>
                <Text style={styles.txtFill}>to complete</Text>
                <View style={styles.frmInput}>
                  <TextInput
                    placeholderTextColor={'grey'}
                    placeholder="Input Driver code here"
                    style={styles.txtTextInput}
                  />
                </View>
                {/* {selectedImage ? (
              <Image
                source={{uri: selectedImage}}
                style={{width: 200, height: 200, marginBottom: 20}}
              />
            ) : (
              <Text style={{marginBottom: 20}}>No Image Selected</Text>
            )} */}
                <View style={styles.rowPhoto}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      console.log('onPress');
                      // openImagePicker();
                    }}>
                    <View style={styles.circleGallery}>
                      <FontAwesome size={15} color={'grey'} name="photo" />
                    </View>
                    <Text
                      style={{
                        fontSize: fontSize.font12,
                        color: 'grey',
                        textAlign: 'center',
                      }}>
                      Gallery
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      console.log('Press');
                      // <Camera
                      //   style={StyleSheet.absoluteFill}
                      //   device={device}
                      //   isActive={true}
                      // />;
                    }}>
                    <View style={styles.circleGallery}>
                      <EvilIcons size={25} color={'grey'} name="camera" />
                    </View>
                    <Text
                      style={{
                        fontSize: fontSize.font12,
                        color: 'grey',
                        textAlign: 'center',
                      }}>
                      Camera
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.txtBtn}>
                  <Text onPress={AlertDialog} style={styles.txtCancel}>
                    Cancel
                  </Text>
                  <Text
                    onPress={() => {
                      // showDialogs();
                      navigate('History');
                    }}
                    style={[
                      styles.txtCancel,
                      {backgroundColor: btnColor, color: 'white'},
                    ]}>
                    Done
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default AssignedAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  rowFilter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 12,
  },
  filterBtn: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'white',
    fontSize: fontSize.font15,
    fontWeight: '400',
  },
  cardRecntly: {
    paddingVertical: 20,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 12,
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: '25%',
  },
  circleIcon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowHead: {
    flexDirection: 'row',
  },
  txtTitle: {
    fontSize: fontSize.font16,
    color: 'black',
    marginLeft: 15,
    marginTop: 4,
    fontWeight: '400',
  },
  mainRowHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNumber: {
    flexDirection: 'row',
    marginTop: 3,
  },
  txtOrderNumber: {
    fontSize: fontSize.font14,
    color: 'grey',
    fontWeight: '400',
  },
  valueOrderNumber: {
    position: 'absolute',
    top: 0,
    left: '35%',
    color: 'black',
    fontSize: fontSize.font14,
  },
  rowAddress: {
    flexDirection: 'row',
  },
  txtAddress: {
    marginLeft: 15,
    fontSize: fontSize.font14,
    color: 'grey',
    width: '80%',
    lineHeight: 25,
    // backgroundColor: 'red'
  },
  modalView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertDialog: {
    alignSelf: 'center',
    marginHorizontal: '10%',
    width: '90%',
    margin: 48,
    elevation: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderWidth: 10,
    borderColor: '#ede5f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFill: {
    marginTop: 8,
    fontSize: fontSize.font15,
    color: 'black',
  },
  frmInput: {
    width: '90%',
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTextInput: {
    padding: 0,
    width: '90%',
    textAlign: 'center',
  },
  rowPhoto: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    width: '70%',
  },
  circleGallery: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginBottom: 4,
  },
  txtBtn: {
    marginTop: 18,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  txtCancel: {
    paddingHorizontal: 40,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: btnColor,
    borderRadius: 20,
    color: btnColor,
  },
});
