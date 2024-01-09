import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput
} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor} from '../../../constants/Color';
import {height, width} from '../../../constants/WindowSize';
import {fontSize} from '../../../constants/FontSize';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate} from '../../../services/navigate/Index';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

const optionDialog = ['No', 'Yes'];
const seasonLeavingCheck = ['Cancel', 'Confirm'];

const seasonLeaving = [
  'Motorbike has a problem',
  'Customer location is too far',
  'Mobile phone has a problem',
  'I\'m busy',
  'Other',
];

const DetailAssignedSpeeedScreen = () => {
  const [showDialog, setDialog] = useState(false);
  const [problemLeaving, setProblemLeaving] = useState(false);
  const [selectSeasonLeave, setSeasonLeaving] = useState<any>(null);
  
  const LeavingStatus = (select:number)=>{
    setSeasonLeaving(select);
  }

  const ProblemLeaving = () => {
    return setProblemLeaving(problem => !problem);
  };

  console.log('Problem Leaving: ', problemLeaving);

  const toggleShowDialog = () => {
    return setDialog(pressed => !pressed);
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
      <View style={styles.Bottom}>
        <Text
          onPress={() => {
            ProblemLeaving();
          }}
          style={styles.txtBtnReject}>
          Reject
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            toggleShowDialog();
          }}>
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
              <Text style={styles.txtFinish}>Accept Order</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign
                color={'white'}
                size={18}
                name="right"
                style={{opacity: 0.8}}
              />
              <AntDesign
                color={'white'}
                size={18}
                name="right"
                style={{opacity: 0.5}}
              />
              <AntDesign
                color={'white'}
                size={18}
                name="right"
                style={{opacity: 0.2}}
              />
              <AntDesign
                color={'white'}
                size={18}
                name="right"
                style={{opacity: 0.1}}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <Modal visible={showDialog} animationType="fade" transparent={true}>
          <View style={styles.modalView}>
            <View style={styles.alert}>
              <View style={styles.circleQuestion}>
                <FontAwesome5 name="question" size={16} color={'white'} />
              </View>
              <Text style={styles.txtI}>Do you want to pick up this</Text>
              <Text style={[styles.txtI, {marginTop: 8}]}>assignment?</Text>
              <View style={styles.txtRowOption}>
                {optionDialog.map((e, index) => {
                  return (
                    <Text
                      onPress={() => {
                        console.log(index);
                        if (index == 0) {
                          toggleShowDialog();
                        }
                      }}
                      style={[
                        styles.btnOption,
                        {
                          backgroundColor: index == 1 ? btnColor : 'white',
                          color: index == 1 ? 'white' : btnColor,
                          borderWidth: index == 1 ? 0 : 0.8,
                          borderColor: index == 1 ? btnColor : btnColor,
                          fontSize: fontSize.font13,
                          fontWeight: '500',
                        },
                      ]}
                      key={index}>
                      {e}
                    </Text>
                  );
                })}
              </View>
            </View>
          </View>
        </Modal>
        <Modal visible = {problemLeaving} animationType='fade' transparent = {true}>
          <View style = {styles.modalView}>
            <View style = {styles.alert}>
              <Image source={require('../../../assets/note.png')}/>
              <Text style = {styles.txtLeaveSeason}>Please leave your reason here</Text>
              <View style = {{marginTop: 15}}>
                {
                  seasonLeaving.map((e, index)=>{
                    return <TouchableOpacity
                    activeOpacity={0.8} 
                    key={index} 
                    style = {[styles.rowSeasonLeaving, {
                      backgroundColor: selectSeasonLeave == index? '#fde7f3': 'white',
                    }]}
                    onPress={()=>{
                      LeavingStatus(index);
                    }}
                    >
                      <Text style = {styles.txtSeasonLeaving}>{e}</Text>
                      <Octicons color={'grey'} size={22} name={selectSeasonLeave == index? 'check-circle-fill':'circle'}/>
                    </TouchableOpacity>
                  })
                }
                <View style = {styles.frmInputSeasonLeaving}>
                  <TextInput placeholderTextColor={'black'} style = {styles.txtFrmInputSeasonLeaving} placeholder='Type your reason here'/>
                </View>
                <View style = {styles.txtRow}>
                  {
                    seasonLeavingCheck.map((e, index)=>{
                      return <Text 
                      key={index}
                      onPress={()=>{
                        if(index == 0){
                          ProblemLeaving();
                        }else{
                          navigate('CommissinDetailScreen')
                        }
                      }}
                      style = {[styles.btnYesOrNo, {borderWidth: 1, borderColor: index == 0? btnColor : 'white', backgroundColor: index == 0? 'white' : btnColor, color: index == 0 ? btnColor : 'white'}]}
                      >{e}</Text>
                    })
                  }
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default DetailAssignedSpeeedScreen;

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
    lineHeight: 25
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
  },
  btnBottom: {
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
    marginHorizontal: 8,
    opacity: 0.8,
  },
  txtBtnReject: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 20,
    borderColor: ColorApp.puple,
    borderWidth: 1,
    color: ColorApp.puple,
    fontWeight: '500',
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
  circleQuestion: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: ColorApp.cardColor,
    borderWidth: 4,
    borderColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtI: {
    fontSize: fontSize.font15,
    marginTop: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
  txtRowOption: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },
  btnOption: {
    paddingHorizontal: 45,
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 20,
    marginBottom: 8,
  },
  txtLeaveSeason:{
    color: 'black',
    paddingVertical: 13,
    fontSize: fontSize.font14
  },
  rowSeasonLeaving:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  txtSeasonLeaving:{
    fontSize: fontSize.font14,
    paddingBottom: 15,
    color: 'black',
    textAlign: 'center',
    paddingTop: 15
  },
  frmInputSeasonLeaving:{
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: ColorApp.bgColor,
    borderRadius: 10
  },
  txtFrmInputSeasonLeaving:{
    padding: 0,
    color: 'black'
  },
  txtRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  btnYesOrNo:{
    width: '44%',
    paddingHorizontal: 20,
    paddingVertical: 13,
    backgroundColor: 'green',
    textAlign: 'center',
    borderRadius: 25,
    fontSize: fontSize.font15
  }
});
