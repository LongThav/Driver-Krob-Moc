import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ColorApp} from '../../../constants/Color';
import {Divider} from 'react-native-paper';
import {fontSize} from '../../../constants/FontSize';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MapView from 'react-native-maps';
import {height} from '../../../constants/WindowSize';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <Text style={styles.txtCustomerInfo}>Customer Information</Text>
          <Divider style={{marginVertical: 17}} />
          <View style={styles.rowPhoneCall}>
            <Feather
              color={ColorApp.cardColor}
              size={18}
              name="phone-call"
              style={{marginTop: 1}}
            />
            <Text style={styles.txtNumberPhone}>(+855)23 883 649</Text>
          </View>
          <View style={{marginVertical: 13}} />
          <View style={styles.rowPhoneCall}>
            <Fontisto
              color={ColorApp.cardColor}
              size={18}
              name="email"
              style={{marginTop: 1}}
            />
            <Text style={styles.txtNumberPhone}>info@Kalip.com</Text>
          </View>
          <View style={{marginVertical: 13}} />
          <View style={styles.rowPhoneCall}>
            <AntDesign
              color={ColorApp.cardColor}
              size={18}
              name="earth"
              style={{marginTop: 1}}
            />
            <Text style={styles.txtNumberPhone}>www.kalip.com/</Text>
          </View>
          <View style={{marginVertical: 13}} />
          <View style={styles.rowPhoneCall}>
            <SimpleLineIcons
              color={ColorApp.cardColor}
              size={18}
              name="social-facebook"
              style={{marginTop: 1}}
            />
            <Text style={styles.txtNumberPhone}>www.facebook.com/Kalip</Text>
          </View>
          <View style={{marginVertical: 10}} />
          <View style={styles.rowPhoneCall}>
            <SimpleLineIcons
              color={ColorApp.cardColor}
              size={18}
              name="location-pin"
              style={{marginTop: 5}}
            />
            <Text style={[styles.txtNumberPhone, {lineHeight: 25}]}>
              The Elysee Koh Pich, No,83-005, St, De La Grande Aliee, Phnom Penh
            </Text>
          </View>
        </View>
        <View style={[styles.boxMap, {marginTop: -3}]}>
          <MapView
            style={styles.map}
            region={{
              latitude: 11.5796,
              longitude: 104.925,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  box: {
    margin: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  txtCustomerInfo: {
    color: 'black',
    fontSize: fontSize.font16,
    fontWeight: '500',
  },
  rowPhoneCall: {
    flexDirection: 'row',
  },
  txtNumberPhone: {
    paddingLeft: 17,
    color: 'black',
    fontSize: fontSize.font14,
  },
  map: {
    width: '100%',
    height: height * 0.45,
  },
  boxMap: {
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 8,
  },
});
