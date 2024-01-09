import {
  Image,
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import {height, width} from '../../../constants/WindowSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {navigate, push} from '../../../services/navigate/Index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const filter = ['Today', 'Weekly', 'Monthly'];

const status = [
  {
    id: '1',
    icon: require('../../../assets/assigned.png'),
    title: 'Total Assigned',
    total: '25',
  },
  {
    id: '2',
    icon: require('../../../assets/accept.png'),
    title: 'Total Accepted',
    total: '2',
  },
  {
    id: '3',
    icon: require('../../../assets/delivery.png'),
    title: 'Total Delivery',
    total: '1',
  },
  {
    id: '4',
    icon: require('../../../assets/commission.png'),
    title: 'Total Commission',
    total: '$35.00',
  },
];

const RecentlyData = [
  {
    id: '1',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '2',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '3',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '4',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '5',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    icon: require('../../../assets/clothes.png'),
  },
  {
    id: '6',
    title: 'CAM FASHION 168',
    order_number: '#00000014',
    order_date: '02 may, 2022, 10:15AM',
    address: 'Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351',
    icon: require('../../../assets/clothes.png'),
  },
];

const SpeedScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [filterQuery, setFilter] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={ColorApp.bgColor}></StatusBar>
      <FlatList
        style={{flex: 1}}
        data={[1]}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.rowPro}>
                  <View style={styles.imgProfile}>
                    <Image
                      style={styles.img}
                      source={require('../../../assets/profile.png')}
                    />
                  </View>
                  <View style={styles.colTxt}>
                    <Text onPress = {()=>{
                      console.log("Press");
                      navigate('TestScreen')
                    }} style={styles.txtWeclome}>Welcome Back</Text>
                    <Text style={styles.txtName}>Sokha Pen</Text>
                  </View>
                </View>
                <Switch
                  onChange={toggleSwitch}
                  value={isEnabled}
                  trackColor={{false: '#e11f1f', true: ColorApp.green}}
                  thumbColor={isEnabled ? 'white' : 'white'}
                  style={styles.swtich}
                  ios_backgroundColor="#3e3e3e"
                />
                {isEnabled ? (
                  <View style={styles.active}></View>
                ) : (
                  <View
                    style={[
                      styles.active,
                      {backgroundColor: '#e11f1f'},
                    ]}></View>
                )}
              </View>
              <View style={styles.filter}>
                {filter.map((e, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.8}
                      onPress={() => {
                        console.log('index: ', index);
                        setFilter(index);
                      }}>
                      <Text
                        style={[
                          styles.txtFilter,
                          {
                            // marginHorizontal: index == 1 ? 10 : 0,
                            backgroundColor:
                              filterQuery == index ? ColorApp.puple : 'white',
                            color: filterQuery == index ? 'white' : 'black',
                          },
                        ]}>
                        {e}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={styles.flatList}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={status}
                  numColumns={2}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                          if (item.id === '3') {
                            navigate('StatusScreen', {
                              title: 'In Delivery',
                            });
                          } else if (item.id === '4') {
                            navigate('CommissionHistory');
                          }else if(item.id === '2'){
                            navigate('AcceptScreen')
                          }else {
                            console.log("Cann't navigate");
                          }
                        }}
                        style={[
                          styles.card,
                          {
                            marginLeft: index == 1 ? 10 : index == 3 ? 10 : 0,
                            marginBottom: index == 0 ? 10 : index == 1 ? 10 : 0,
                          },
                        ]}>
                        <View style={styles.circle}>
                          <Image tintColor={'white'} source={item.icon} />
                        </View>
                        <View style={styles.valueItem}>
                          <Text style={styles.txtTotal}>{item.total}</Text>
                          <Text style={styles.txtDes}>{item.title}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View style={styles.txtRowRecently}>
                <Text style={styles.txtRecently}>Recently Assigned</Text>
                <Text
                  onPress={() => {
                    console.log('Pressed');
                    navigate('Assigned');
                  }}
                  style={styles.txtSeeAll}>
                  See All
                </Text>
              </View>
              <View style={styles.item}>
                {RecentlyData.map((e, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        if (index === 0 || index === 2) {
                          navigate('DetailAssignedSpeeedScreen', {
                            title: 'In Delivery',
                          });
                        } else {
                          console.log("Can't navigate to new screen");
                          navigate('StatusScreen', {
                            title: 'Accepted',
                          });
                        }
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
                                backgroundColor:
                                  index == 0
                                    ? ColorApp.cardColor
                                    : index == 1
                                    ? ColorApp.puple
                                    : index == 2
                                    ? ColorApp.cardColor
                                    : ColorApp.puple,
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
            </View>
          );
        }}
      />
    </View>
  );
};

export default SpeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  header: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'grey',
  },
  img: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  colTxt: {
    marginLeft: 15,
  },
  rowPro: {
    flexDirection: 'row',
  },
  swtich: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
  },
  txtWeclome: {
    fontSize: fontSize.font18,
    color: ColorApp.black,
    fontWeight: '500',
  },
  txtName: {
    fontSize: fontSize.font14,
    color: ColorApp.black,
    fontWeight: '500',
    paddingTop: 3,
  },
  active: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: ColorApp.green,
    borderRadius: 10 / 2,
    top: height * 0.049,
    left: width * 0.085,
  },
  filter: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 15,
    marginBottom: 8,
    width: '92%',
    // backgroundColor: 'red'
  },
  txtFilter: {
    paddingHorizontal: width * 0.065,
    paddingVertical: 10,
    backgroundColor: 'red',
    fontSize: fontSize.font18,
    color: 'white',
    borderRadius: 8,
  },
  card: {
    width: '48.8%',
    height: height * 0.24,
    backgroundColor: ColorApp.cardColor,
    borderRadius: 12,
  },
  flatList: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  circle: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 45 / 2,
    alignSelf: 'flex-end',
    marginTop: 13,
    marginRight: 13,
    opacity: 0.5,
    alignContent: 'center',
    alignItems: 'center',
  },
  valueItem: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 13,
    marginLeft: 13,
  },
  txtTotal: {
    color: ColorApp.colorTxt,
    fontSize: fontSize.font18,
    fontWeight: '500',
  },
  txtDes: {
    color: ColorApp.colorTxt,
    fontSize: fontSize.font15,
    fontWeight: '500',
    marginTop: 5,
  },
  txtRowRecently: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
  },
  txtRecently: {
    fontSize: 17,
    fontWeight: '400',
    color: ColorApp.black,
  },
  txtSeeAll: {
    color: ColorApp.puple,
    fontSize: 17,
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
    // backgroundColor: 'red',
    width: '80%',
  },
});
