import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {ColorApp} from '../../../constants/Color';
import { fontSize } from '../../../constants/FontSize';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <View style = {styles.logo}>
            <View style={styles.imgView}>
              <Image
                style={{flex: 1, width: undefined, height: undefined}}
                source={require('../../../assets/logo_small.png')}
              />
            </View>
            <Text style = {styles.txtDelivery}>Delivery Krob Mok</Text>
          </View>
          <Text style = {styles.txtWhoWeAre}>Who we are?</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: '100%',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  imgView: {
    width: 100,
    height: 100,
  },
  txtDelivery:{
    fontSize: fontSize.font15,
    color: 'black',
    fontWeight: '400',
    position: 'absolute',
    bottom: -8
  },
  logo:{
    alignContent: 'center',
    alignItems: 'center'
  },
  txtWhoWeAre:{
    marginTop: 30,
    color: 'black',
    fontWeight: '500',
    fontSize: fontSize.font16
  }
});
