import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {goBack} from '../services/navigate/Index';
import {fontSize} from '../constants/FontSize';

const AppBar = ({title}: any) => {
  return (
    <View style={styles.headerApp}>
      <View style={styles.leading}>
        <AntDesign
          name="left"
          size={20}
          color={'grey'}
          style={{marginTop: 4}}
          onPress={() => {
            goBack();
          }}
        />
      </View>
      <Text style={styles.txtAppBartitle}>{title}</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  leading: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 30 / 2,
    marginLeft: 15,
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },

  headerApp: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'center',
  },
  txtAppBartitle: {
    fontSize: fontSize.font18,
    color: 'black',
    fontWeight: '400',
  },
});
