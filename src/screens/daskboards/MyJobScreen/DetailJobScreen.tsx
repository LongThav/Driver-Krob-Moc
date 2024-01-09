import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {ColorApp} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import {height, width} from '../../../constants/WindowSize';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigate} from '../../../services/navigate/Index';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailJobScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, marginBottom: '18%'}}>
        <View style={styles.boxName}>
          <View style={styles.rowHead}>
            <View
              style={[
                styles.circleIcon,
                {
                  backgroundColor: ColorApp.cardColor,
                },
              ]}>
              <Image source={require('../../../assets/clothes.png')} />
            </View>
            <Text style={styles.txtTitle}>CAM FASHION 168</Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#d6d6d6',
              marginVertical: 15,
            }}
          />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Contact Number</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={styles.txtPhone}>015 287 859</Text>
            </View>
          </View>
          <View style={styles.rowAddress}>
            <FontAwesome6
              name="location-dot"
              size={16}
              color={ColorApp.cardColor}
              style={{marginTop: 5}}
            />
            <Text style={styles.txtAddress}>
              Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigate('MapScreen');
            }}
            style={styles.btnGetDirection}>
            <Image
              style={{marginRight: 10}}
              source={require('../../../assets/feather.png')}
            />
            <Text style={styles.txtGetDirection}>Get Direction</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxSummery}>
          <Text style={styles.txtSummery}>Order Summary</Text>
          <View
            style={{
              height: 1,
              backgroundColor: '#d6d6d6',
              marginVertical: 15,
            }}
          />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Order Number</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={[styles.txtPhone, {color: 'black', opacity: 0.8}]}>
                #00000014
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 7}} />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Order Date</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={[styles.txtPhone, {color: 'black', opacity: 0.8}]}>
                07 June,2022, 10:25AM
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 7}} />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Order Status</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text
                style={[styles.txtPhone, {color: ColorApp.red, opacity: 0.8}]}>
                Rejected
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 7}} />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Reason</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={[styles.txtPhone, {color: 'black', opacity: 0.8}]}>
                Motorbike has a problem
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 7}} />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Distance</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={[styles.txtPhone, {color: 'black', opacity: 0.8}]}>
                1.5km
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 7}} />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Payment Method</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={[styles.txtPhone, {color: 'black', opacity: 0.8}]}>
                Cash
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 7}} />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Delivery Fee</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={[styles.txtPhone, {color: 'black', opacity: 0.8}]}>
                $1.00
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 7}} />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Total Amount</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={[styles.txtPhone, {color: 'black', opacity: 0.8}]}>
                $30.00
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.boxName}>
          <Text style={styles.txtSummery}>Customer Information</Text>
          <View
            style={{
              height: 1,
              backgroundColor: '#d6d6d6',
              marginVertical: 15,
            }}
          />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Name</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text style={[styles.txtPhone, {color: 'black', opacity: 0.8}]}>
                Sok Somnag
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 7}} />
          <View style={styles.rowContactNum}>
            <Text style={styles.txtContactNum}>Contact Number</Text>
            <View style={styles.txtRowNum}>
              <Text style={styles.option}>:</Text>
              <Text
                style={[styles.txtPhone, {color: ColorApp.red, opacity: 0.8}]}>
                012 123 456
              </Text>
            </View>
          </View>
          <View style={styles.rowAddress}>
            <FontAwesome6
              name="location-dot"
              size={16}
              color={ColorApp.cardColor}
              style={{marginTop: 5}}
            />
            <Text style={styles.txtAddress}>
              Street 31BT, Phnom Penh, GWJ4+97 Phnom Penh, 12351
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigate('MapScreen');
            }}
            style={styles.btnGetDirection}>
            <Image
              style={{marginRight: 10}}
              source={require('../../../assets/feather.png')}
            />
            <Text style={styles.txtGetDirection}>Get Direction</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
            <Text style={styles.txtFinish}>Arrive Shop</Text>
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
    </View>
  );
};

export default DetailJobScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  boxName: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  rowHead: {
    flexDirection: 'row',
  },
  circleIcon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: fontSize.font16,
    color: 'black',
    marginLeft: 15,
    marginTop: 4,
    fontWeight: '400',
  },
  txtRowNum: {
    flexDirection: 'row',
    position: 'absolute',
    left: width * 0.3,
  },
  rowContactNum: {
    flexDirection: 'row',
  },
  option: {
    marginRight: 10,
    color: 'black',
    opacity: 0.8,
    fontWeight: '500',
    fontSize: fontSize.font14,
  },
  txtContactNum: {
    fontSize: fontSize.font14,
    fontWeight: '500',
    color: 'black',
    opacity: 0.8,
  },
  txtPhone: {
    fontSize: fontSize.font14,
    fontWeight: '500',
    color: ColorApp.red,
    opacity: 0.8,
  },
  rowAddress: {
    flexDirection: 'row',
    marginTop: 10,
  },
  txtAddress: {
    marginLeft: 15,
    fontSize: fontSize.font14,
    color: 'black',
    opacity: 0.8,
    fontWeight: '500',
    width: '70%',
    lineHeight: 30
  },
  btnGetDirection: {
    paddingVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorApp.cardColor,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 5,
  },
  txtGetDirection: {
    color: 'white',
    opacity: 0.8,
  },
  boxSummery: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 10,
  },
  txtSummery: {
    fontSize: fontSize.font16,
    color: 'black',
    opacity: 0.8,
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
  txtFinish: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 15,
    opacity: 0.8,
  },
});
