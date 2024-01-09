import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import Feather from 'react-native-vector-icons/Feather';
import {width} from '../../../constants/WindowSize';
import { navigate } from '../../../services/navigate/Index';

const filterCommissionHistory = ['Today', 'Weekly', 'Monthly', 'filter'];
const totalItem = [
  {
    id: '1',
    total_order: '$1550.00',
    title: 'Total Orders',
    icon: require('../../../assets/total_order.png'),
  },
  {
    id: '2',
    total_order: '$150.00',
    title: 'Total Commission',
    icon: require('../../../assets/total_commission.png'),
  },
  {
    id: '3',
    total_order: '50',
    title: 'Total Shops',
    icon: require('../../../assets/total_shop.png'),
  },
  {
    id: '4',
    total_order: '51',
    title: 'Total Customers',
    icon: require('../../../assets/total_customer.png'),
  },
];

const DeliveryItem = [
  {
    id: '1',
    name: 'Jariya Shop',
    km: '2km',
    order_date: '02-May-2022, 10:15AM',
    amount_comission: '$3.00',
    status: 'Completed',
  },
  {
    id: '2',
    name: 'Jariya Shop',
    km: '2km',
    order_date: '02-May-2022, 10:15AM',
    amount_comission: '$3.00',
    status: 'Completed',
  },
  {
    id: '3',
    name: 'Jariya Shop',
    km: '2km',
    order_date: '02-May-2022, 10:15AM',
    amount_comission: '$3.00',
    status: 'Completed',
  },
  {
    id: '4',
    name: 'Jariya Shop',
    km: '2km',
    order_date: '02-May-2022, 10:15AM',
    amount_comission: '$3.00',
    status: 'Completed',
  },
  {
    id: '5',
    name: 'Jariya Shop',
    km: '2km',
    order_date: '02-May-2022, 10:15AM',
    amount_comission: '$3.00',
    status: 'Completed',
  },
  {
    id: '6',
    name: 'Jariya Shop',
    km: '2km',
    order_date: '02-May-2022, 10:15AM',
    amount_comission: '$3.00',
    status: 'Completed',
  },
];

const CommissionHistory = () => {
  const [selectFilter, setSelectFilter] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.filterStyle}>
        {filterCommissionHistory.map((e, index) => {
          if (index === 3) {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {
                  // setSelectFilter(index);
                  // console.log(index);
                }}>
                <Feather
                  name="filter"
                  color='grey'
                  style={[
                    styles.iconFilter,
                    {
                      backgroundColor: 'white',
                      // marginLeft: 10
                    },
                  ]}
                  size={20}
                />
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {
                  setSelectFilter(index);
                }}>
                <Text
                  style={[
                    styles.btnFilter,
                    {
                      backgroundColor:
                        selectFilter == index ? ColorApp.puple : 'white',
                      color: selectFilter == index ? 'white' : ColorApp.black,
                      // marginLeft: index == 0? 0 : 10
                    },
                  ]}
                  key={index}>
                  {e}
                </Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxTotal}>
          {totalItem.map((e, index) => {
            return (
              <View key={index} style={[styles.itemTotal, {marginBottom: 10}]}>
                <View style={styles.bgImg}>
                  <Image source={e.icon} />
                </View>
                <View style={styles.txtCol}>
                  <Text style={styles.txtTotalOrder}>{e.total_order}</Text>
                  <Text style={styles.txtTitle}>{e.title}</Text>
                </View>
              </View>
            );
          })}
        </View>
        {DeliveryItem.map((e, index) => {
          return (
            <TouchableOpacity 
            activeOpacity={0.8} 
            key={index} 
            style={styles.card}
            onPress={()=>{
              console.log(index);
              navigate('CommissinDetailScreen');
            }}
            >
              <View style={styles.rowName}>
                <Text style={styles.txtName}>{e.name}</Text>
                <Text style={[styles.txtName, {fontSize: fontSize.font14}]}>
                  {e.km}
                </Text>
              </View>
              <View style={styles.rowOrder}>
                <Text style={styles.txtOrder}>Order Date</Text>
                <View style={styles.doubleRow}>
                  <Text style={styles.txtDot}>:</Text>
                  <Text style={styles.txtOrderDate}>{e.order_date}</Text>
                </View>
              </View>
              <View style={styles.rowOrder}>
                <Text style={styles.txtOrder}>Amount Commission</Text>
                <View style={styles.doubleRow}>
                  <Text style={styles.txtDot}>:</Text>
                  <Text style={styles.txtOrderDate}>{e.amount_comission}</Text>
                </View>
              </View>
              <View style={styles.rowOrder}>
                <Text style={styles.txtOrder}>Status</Text>
                <View style={styles.doubleRow}>
                  <Text style={styles.txtDot}>:</Text>
                  <Text style={[styles.txtOrderDate, {color: ColorApp.green}]}>
                    {e.status}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CommissionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor
  },
  filterStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 15,
    marginVertical: 12,
    // backgroundColor: 'red'
  },
  btnFilter: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: ColorApp.puple,
    fontSize: fontSize.font16,
    borderRadius: 12,
    alignSelf: 'center',
  },
  iconFilter: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: ColorApp.puple,
    borderRadius: 12,
    alignSelf: 'center',
    // marginLeft: 10
  },
  boxTotal: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    margin: 15,
    paddingTop: 10,
    borderRadius: 10,
  },
  itemTotal: {
    backgroundColor: ColorApp.cardColor,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  txtCol: {},
  txtTotalOrder: {
    textAlign: 'right',
    color: 'white',
    fontSize: fontSize.font18,
    fontWeight: '500',
  },
  bgImg: {
    width: 40,
    height: 40,
    marginTop: 4,
  },
  txtTitle: {
    fontSize: fontSize.font14,
    color: 'white',
    opacity: 0.8,
  },
  card: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    paddingVertical: 13,
    marginBottom: 10,
    borderRadius: 10,
  },
  rowName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtName: {
    fontSize: fontSize.font16,
    color: 'black',
    opacity: 0.8,
  },
  rowOrder: {
    marginTop: 10,
    flexDirection: 'row',
  },
  doubleRow: {
    flexDirection: 'row',
    position: 'absolute',
    left: width * 0.4,
  },
  txtDot: {
    marginRight: 18,
    color: 'black',
    opacity: 0.8,
    fontSize: fontSize.font14,
  },
  txtOrder: {
    fontSize: fontSize.font14,
    color: 'black',
    opacity: 0.8,
  },
  txtOrderDate: {
    fontSize: fontSize.font14,
    color: 'black',
    opacity: 0.8,
  },
});
