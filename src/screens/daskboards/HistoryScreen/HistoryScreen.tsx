import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate} from '../../../services/navigate/Index';
import Feather from 'react-native-vector-icons/Feather';
import {fontSize} from '../../../constants/FontSize';
import {ColorApp, btnColor} from '../../../constants/Color';
import {width} from '../../../constants/WindowSize';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';

const filter = ['Completed', 'Rejected'];

const Rejected = [
  {
    id: '1',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Rejected',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '2',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Rejected',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '3',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Rejected',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '4',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Rejected',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '5',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Rejected',
    icon: require('../../../assets/clothes.png'),
  },
];

const CompleteData = [
  {
    id: '1',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Completed',
    icon: require('../../../assets/clothes.png'),
  },

  {
    id: '2',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Completed',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '3',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Completed',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '4',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Completed',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '4',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Completed',
    icon: require('../../../assets/clothes.png'),
  },

  {
    id: '5',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    status: 'Completed',
    icon: require('../../../assets/clothes.png'),
  },
];

const HistoryScreen = () => {
  const [selectFilter, setSelectFilter] = useState(0);
  const [complete, setComplete] = useState<any>();
  const completed = [];
  const [selectFilterDate, setSelectFilterDate] = useState(false);
  const toggleFilterDate = () => setSelectFilterDate(!selectFilterDate);
  const [selectDateBottomSheet, setSelectDateBottomSheet] = useState(false);
  const toggleSelectDateBottomSheet = () =>
    setSelectDateBottomSheet(!selectDateBottomSheet);
  console.log('Select filter: ', selectFilterDate);
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>
        <View style={styles.leading}>
          <AntDesign
            name="left"
            size={20}
            color={'grey'}
            style={{marginTop: 4}}
            onPress={() => {
              navigate('SpeedScreen');
            }}
          />
        </View>
        <Text style={styles.txtTitleApp}>History</Text>
        <View style={styles.rowIcon}>
          <AntDesign
            onPress={() => {
              navigate('SearchBarHistoryScreen');
            }}
            name="search1"
            size={20}
            color={'grey'}
          />
          <Feather
            onPress={toggleFilterDate}
            name="filter"
            color={'grey'}
            style={{marginLeft: 15}}
            size={20}
          />
          <Modal
            visible={selectFilterDate}
            animationType="fade"
            transparent={true}>
            <View style={styles.modalView}>
              <View style={styles.alert}>
                <Text style={styles.txtFilterDate}>Filter Date</Text>
                <View
                  style={{
                    height: 1,
                    width: 'auto',
                    backgroundColor: 'grey',
                    marginVertical: 15,
                    opacity: 0.6,
                  }}
                />
                <View style={styles.txtForm}>
                  <View>
                    <Text
                      style={{color: 'grey', opacity: 0.8, fontWeight: '500'}}>
                      Form
                    </Text>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={styles.formStart}
                      onPress={() => {
                        console.log('Press');
                        toggleSelectDateBottomSheet();
                        toggleFilterDate();
                      }}>
                      <MaterialCommunityIcons
                        name="calendar-month"
                        size={20}
                        color={ColorApp.cardColor}
                      />
                      <Text
                        style={{
                          marginLeft: 10,
                          color: 'grey',
                          fontWeight: 'bold',
                        }}>
                        07 June, 2022
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text
                      style={{color: 'grey', opacity: 0.8, fontWeight: '500'}}>
                      To
                    </Text>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        toggleSelectDateBottomSheet();
                        toggleFilterDate();
                      }}
                      style={styles.formStart}>
                      <MaterialCommunityIcons
                        name="calendar-month"
                        size={20}
                        color={ColorApp.cardColor}
                      />
                      <Text
                        style={{
                          marginLeft: 10,
                          color: 'grey',
                          fontWeight: 'bold',
                        }}>
                        07 June, 2022
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 18,
                    justifyContent: 'space-evenly',
                  }}>
                  <Text
                    onPress={() => {
                      toggleFilterDate();
                    }}
                    style={styles.borderReset}>
                    Reset
                  </Text>
                  <Text
                    onPress={() => {
                      toggleFilterDate();
                    }}
                    style={[
                      styles.borderReset,
                      {color: 'white', backgroundColor: btnColor},
                    ]}>
                    Apply
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            visible={selectDateBottomSheet}
            animationType="fade"
            transparent={true}>
            <View style={styles.modalBottom}>
              <View style={styles.alertBottom}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    onPress={() => {
                      toggleSelectDateBottomSheet();
                      toggleFilterDate();
                    }}
                    style={{color: ColorApp.red}}>
                    Cancel
                  </Text>
                  <Text style={{color: 'black'}}>Select date</Text>
                  <Text
                    onPress={() => {
                      toggleSelectDateBottomSheet();
                      toggleFilterDate();
                    }}
                    style={{color: 'blue', opacity: 0.8}}>
                    Save
                  </Text>
                </View>
                <View style={{alignSelf: 'center'}}>
                  <DatePicker
                    date={date}
                    onDateChange={setDate}
                    androidVariant="nativeAndroid"
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View style={styles.filter}>
        {filter.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => {
                setSelectFilter(index);
                // AcceptedData.map(e => {});
              }}>
              <Text
                style={[
                  styles.btnFilter,
                  {
                    backgroundColor:
                      selectFilter == index ? ColorApp.puple : 'white',
                    color: selectFilter == index ? 'white' : 'black',
                    // marginLeft: index == 1 ? 0 : 0,
                  },
                ]}>
                {e}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {selectFilter == 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.item}>
            {CompleteData.map((e, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigate('DetailHostoryScreen', {
                      status: e.status,
                    });
                  }}
                  activeOpacity={0.8}
                  key={index}
                  style={[
                    styles.cardRecntly,
                    {marginTop: index == 0 ? 18 : 0},
                  ]}>
                  <View style={styles.mainRowHead}>
                    <View style={styles.rowHead}>
                      <View
                        style={[
                          styles.circleIcon,
                          {
                            backgroundColor: ColorApp.puple,
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
                    <Text style={styles.valueOrderNumber}>
                      : {e.order_date}
                    </Text>
                  </View>
                  <View style={[styles.orderNumber, {marginTop: 13}]}>
                    <Text style={styles.txtOrderNumber}>Order Status</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        left: '35%',
                      }}>
                      <Text style={styles.valueOrderNumber}>:</Text>
                      <Text
                        style={[
                          styles.valueOrderNumber,
                          {color: ColorApp.green, paddingLeft: 3},
                        ]}>
                        {' '}
                        {e.status}
                      </Text>
                    </View>
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
          </View>
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.item}>
            {Rejected.map((e, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigate('DetailHostoryScreen', {
                      status: e.status,
                    });
                  }}
                  activeOpacity={0.8}
                  key={index}
                  style={[
                    styles.cardRecntly,
                    {marginTop: index == 0 ? 18 : 0},
                  ]}>
                  <View style={styles.mainRowHead}>
                    <View style={styles.rowHead}>
                      <View
                        style={[
                          styles.circleIcon,
                          {
                            backgroundColor: ColorApp.puple,
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
                    <Text style={styles.valueOrderNumber}>
                      : {e.order_date}
                    </Text>
                  </View>
                  <View style={[styles.orderNumber, {marginTop: 13}]}>
                    <Text style={styles.txtOrderNumber}>Order Status</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        left: '35%',
                      }}>
                      <Text style={styles.valueOrderNumber}>:</Text>
                      <Text
                        style={[
                          styles.valueOrderNumber,
                          {color: ColorApp.puple, paddingLeft: 3},
                        ]}>
                        {' '}
                        {e.status}
                      </Text>
                    </View>
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
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  leading: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 30 / 2,
    alignContent: 'center',
    alignItems: 'center',
  },
  rowIcon: {
    flexDirection: 'row',
  },
  AppBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  txtTitleApp: {
    fontSize: fontSize.font18,
    color: 'black',
    fontWeight: '400',
    position: 'absolute',
    left: '43%',
  },
  filter: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 15,
    // justifyContent: 'center',
    alignItems: 'center',
    // width: '92%'
  },
  btnFilter: {
    paddingHorizontal: '14%',
    paddingVertical: 12,
    backgroundColor: ColorApp.puple,
    borderRadius: 10,
    color: 'white',
    fontSize: fontSize.font15,
    marginBottom: 15,
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
  mainRowHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNumber: {
    flexDirection: 'row',
    marginTop: 3,
  },
  txtOrderNumber: {
    fontSize: fontSize.font16,
    color: 'grey',
    fontWeight: '400',
  },
  valueOrderNumber: {
    position: 'absolute',
    top: 0,
    left: '35%',
    color: 'black',
    fontSize: fontSize.font16,
  },
  rowAddress: {
    flexDirection: 'row',
  },
  txtAddress: {
    marginLeft: 15,
    fontSize: fontSize.font14,
    color: 'grey',
    width: '80%',
  },
  txtTitle: {
    fontSize: fontSize.font18,
    color: 'black',
    marginLeft: 15,
    marginTop: 4,
    fontWeight: '400',
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
    width: '90%',
    // maxWidth: width,
    margin: 48,
    elevation: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 15,
  },
  txtFilterDate: {
    fontSize: fontSize.font16,
    color: 'black',
    opacity: 0.8,
    fontWeight: '500',
  },
  txtForm: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  formStart: {
    marginTop: 10,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    opacity: 0.8,
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: '6.5%',
  },
  borderReset: {
    marginTop: 8,
    paddingHorizontal: '18.5%',
    textAlign: 'center',
    borderWidth: 0.8,
    borderColor: btnColor,
    paddingVertical: 8,
    borderRadius: 20,
    color: btnColor,
    marginBottom: 10,
  },
  modalBottom: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBottom: {
    alignSelf: 'center',
    marginHorizontal: '10%',
    width: '90%',
    margin: 48,
    elevation: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
