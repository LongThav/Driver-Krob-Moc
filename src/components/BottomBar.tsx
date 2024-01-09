import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {fontSize} from '../constants/FontSize';
import {ColorApp} from '../constants/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {width} from '../constants/WindowSize';

const itemBottom = [
  {
    id: '1',
    title: 'Assigned',
    icon: require('../assets/assign.png'),
  },
  {
    id: '2',
    title: 'My Job',
    icon: require('../assets/myjob.png'),
  },
  {
    id: '3',
    // icon: require('../assets/union.png')
  },
  {
    id: '4',
    title: 'History',
    icon: require('../assets/history.png'),
  },
  {
    id: '5',
    title: 'Account',
    icon: require('../assets/account.png'),
  },
];

const BottomBarCompo = () => {
  const [select, setSelect] = useState<any>(null);

  const SwitchScreen = (value: any) => {
    setSelect(value);
    if (select === 0) {
      console.log('Screen 1');
    } else if (select === 1) {
      console.log('Screen 2');
    } else if (select === 2) {
      console.log('Screen 3');
    } else if (select === 3) {
      console.log('Screen 4');
    } else {
      console.log('Screen 5');
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: '5%',
      }}>
      {itemBottom.map((e, index) => {
        return (
          <TouchableOpacity
            style={{marginRight: index == 1 ? width * 0.1 : 0}}
            activeOpacity={1}
            key={index}
            onPress={() => {
              // console.log(index);
              SwitchScreen(index);
            }}>
            {e.id === '3' ? (
              <View style={styles.centerSpeed}>
                <Image
                  style={{}}
                  source={require('../assets/center.png')}
                />
              </View>
            ) : (
              <View style={[styles.icons]}>
                <Image
                  source={e.icon == null ? null : e.icon}
                  style={[styles.iconsSize]}
                />
              </View>
            )}
            <Text style={styles.txtTitle}>{e.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomBarCompo;

const styles = StyleSheet.create({
  icons: {
    height: 25,
    width: 25,
    // backgroundColor: 'red'
    alignContent: 'center',
    alignSelf: 'center',
  },
  iconsSize: {
    flex: 1,
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: fontSize.font14,
    marginTop: 5,
    color: ColorApp.txtColorBottom,
  },
  centerSpeed: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    position: 'absolute',
    bottom: -4,
    left: -width * 0.14,
    borderWidth: 8,
    borderColor: ColorApp.speedColor,
    padding: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
});

{
  /* <Text style={{flexDirection: 'row',}}>{e.title}</Text> */
}
