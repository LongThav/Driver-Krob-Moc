import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor} from '../../../constants/Color';
import {fontSize} from '../../../constants/FontSize';
import {height, width} from '../../../constants/WindowSize';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {navigate} from '../../../services/navigate/Index';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImagePicker, {
  ImagePickerResponse,
  ImageLibraryOptions,
} from 'react-native-image-picker';

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

// const { hasPermission, requestPermission } = useCameraPermission()
// https://react-native-vision-camera.com/docs/guides

const DetailStatusScreen = () => {
  const [title, setTitle] = useState(false);
  const [titleString, setTitleString] = useState('Start Delivery');
  const [showDialog, setShowDialog] = useState(false);

  const device = useCameraDevice('back');

  if (device == null) return <></>;

  const toggleTitle = () => {
    setTitle(checkTitle => !checkTitle);
    if (title == true) {
      setTitleString('Finish');
    } else {
      setTitleString('Start Delivery');
    }
  };
  const showDialogs = () => setShowDialog(!showDialog);
  console.log('Title: ', title);
  console.log('Title True or false: ', showDialog);

  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };

    ImagePicker.launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.assets && response.assets[0]?.uri) {
        console.log('Image URI: ', response.assets[0].uri);
        console.log('Image type: ', response.assets[0].type);
        console.log('Image name: ', response.assets[0].fileName);
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginBottom: '18%'}}>
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
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          toggleTitle();
          showDialogs();
        }}
        style={styles.Bottom}>
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
            <Text style={styles.txtFinish}>{titleString}</Text>
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
      </TouchableOpacity>
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
            {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, marginBottom: 20 }} />
      ) : (
        <Text style={{ marginBottom: 20 }}>No Image Selected</Text>
      )}
            <View style={styles.rowPhoto}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  console.log('onPress');
                  openImagePicker();
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
                  <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                  />
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
              <Text onPress={showDialogs} style={styles.txtCancel}>
                Cancel
              </Text>
              <Text
                onPress={() => {
                  showDialogs();
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
  );
};

export default DetailStatusScreen;

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
    lineHeight: 25,
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
