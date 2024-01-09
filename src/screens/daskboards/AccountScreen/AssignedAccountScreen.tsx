import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {navigate} from '../../../services/navigate/Index';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
});
