import {StyleSheet, Text, View, Switch, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ColorApp, btnColor} from '../../../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontSize} from '../../../constants/FontSize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const nation = [
  {
    id: '1',
    name: 'Khmer',
    img: require('../../../assets/khmer.png'),
  },
  {
    id: '2',
    name: 'English',
    img: require('../../../assets/english.png'),
  },
];

const SettingScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [click, setClick] = useState<any>(null);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log("Click: ", click);
  
  return (
    <View style={styles.container}>
      <View style={styles.rowNotification}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons color={'grey'} size={25} name="notifications-outline" />
          <Text style={styles.txtNofitcation}>Notification</Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#16950d'}}
          thumbColor={isEnabled ? '#16950d' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={styles.txtChangeLanguage}>Change Language</Text>
      <View style={{marginTop: 6}}>
        {nation.map((e, index) => {
          return (
            <TouchableOpacity 
            onPress={()=>{
                console.log(index);
                setClick(index);
                console.log("Click: ", click);
                
            }} 
            key={index} style={styles.card}
            activeOpacity={0.8}
            >
              <View style={{flexDirection: 'row'}}>
                <View style={styles.circle}>
                  <Image
                    source={e.img}
                    style={{flex: 1, width: 55, height: 55}}
                  />
                </View>
                <Text style = {styles.txtName}>{e.name}</Text>
              </View>
             {/* <MaterialCommunityIcons name= {click === index ? 'checkbox-blank-circle-outline' : 'circle'}/>  */}
             {
                click === index?
                <MaterialCommunityIcons style = {{marginTop: 8}} size={20} color={btnColor} name= 'circle'/>
                : 
                <MaterialCommunityIcons style = {{marginTop: 8}} size={20} color={'grey'}   name= 'checkbox-blank-circle-outline'/>

             }
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  rowNotification: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  txtNofitcation: {
    fontSize: fontSize.font16,
    color: 'black',
    marginLeft: 15,
    fontWeight: '500',
  },
  txtChangeLanguage: {
    fontSize: 17,
    marginLeft: 15,
    color: 'black',
    fontWeight: '500',
    marginTop: 20,
  },
  card: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 42,
    height: 42,
    // backgroundColor: 'red',
    borderRadius: 42 / 2,
  },
  txtName:{
    marginLeft: 20,
    textAlign: 'center',
    marginTop: 6,
    color: 'black',
    fontSize: fontSize.font15
  }
});
