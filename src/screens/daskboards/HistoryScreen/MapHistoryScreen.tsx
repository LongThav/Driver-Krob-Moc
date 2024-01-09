import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {height} from '../../../constants/WindowSize';
import {ColorApp} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import MapView from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MapHistoryScreen = (props: any) => {
  const {status} = props.route.params;
  console.log('status');
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 11.5796,
          longitude: 104.925,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <View style={styles.frmSearch}>
        <AntDesign
          size={18}
          name="search1"
          color={ColorApp.red}
          style={{marginTop: 5}}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'grey'}
          style={styles.txtInput}
        />
      </View>
      <View style={styles.boxAddress}>
        <View style={styles.col}>
          <View style={styles.circle}>
            <View style={styles.circleIn}>
              <View
                style={[
                  styles.circleIn,
                  {flex: 1, backgroundColor: ColorApp.puple},
                ]}
              />
            </View>
          </View>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.circle, {borderColor: ColorApp.red}]}>
            <View style={[styles.circleIn, {backgroundColor: ColorApp.red}]}>
              <View
                style={[
                  styles.circleIn,
                  {flex: 1, backgroundColor: ColorApp.red},
                ]}
              />
            </View>
          </View>
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={styles.txtStart}>Street 31BT, Phnom Penh, GWJ4+97</Text>
          <View style={styles.novalue} />
          <View style={styles.novalue} />
          <View style={styles.novalue} />
          <View style={styles.novalue} />
          <View style={styles.novalue} />
          <Text style={[styles.txtStart]}>
            Street 372BT, Phnom Penh, GWJ4+98
          </Text>
        </View>
      </View>
      <View style={styles.circleLocation}>
        <MaterialIcons
          name="my-location"
          color={ColorApp.cardColor}
          size={25}
        />
      </View>
      {status == 'Completed' ? null : (
        <View style={styles.Bottom}>
          <LinearGradient
            colors={[ColorApp.cardColor, ColorApp.puple]}
            start={{x: 0.5, y: 5}}
            end={{x: 1, y: 1}}
            style={styles.btnBottom}>
            <View style={{flexDirection: 'row'}}>
              <LinearGradient
                colors={[ColorApp.cardColor, ColorApp.puple]}
                start={{x: 0.1, y: 0.1}}
                end={{x: 1, y: 1}}
                style={styles.circleLeft}>
                <AntDesign color={'white'} size={25} name="right" />
              </LinearGradient>
              <Text style={styles.txtFinish}>Finish</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign
                color={'white'}
                size={20}
                name="right"
                style={{opacity: 0.8}}
              />
              <AntDesign
                color={'white'}
                size={20}
                name="right"
                style={{opacity: 0.5}}
              />
              <AntDesign
                color={'white'}
                size={20}
                name="right"
                style={{opacity: 0.2}}
              />
              <AntDesign
                color={'white'}
                size={20}
                name="right"
                style={{opacity: 0.1}}
              />
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

export default MapHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    marginTop: 5,
  },
  Bottom: {
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btnBottom: {
    width: '100%',
    // paddingHorizontal: 10,
    // paddingVertical: ,
    backgroundColor: ColorApp.cardColor,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frmSearch: {
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 12,
    borderRadius: 20,
    flexDirection: 'row',
    opacity: 0.8,
  },
  txtInput: {
    padding: 0,
    marginLeft: 18,
    width: '90%',
    color: 'grey',
  },
  boxAddress: {
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 13.5,
    opacity: 0.8,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 1,
    borderColor: ColorApp.puple,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  circleIn: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: ColorApp.puple,
  },
  dot: {
    height: 3,
    width: 1,
    backgroundColor: 'grey',
    marginBottom: 3,
    opacity: 0.5,
  },
  col: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  novalue: {
    height: 3,
    width: 1,
    backgroundColor: 'white',
    marginBottom: 3,
    opacity: 0.5,
  },
  txtStart: {
    color: 'black',
    fontSize: fontSize.font16,
    fontWeight: '400',
  },
  txtFinish: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 15,
    opacity: 0.8,
  },
  circleLeft: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleLocation: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: height * 0.115,
    right: 0,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
