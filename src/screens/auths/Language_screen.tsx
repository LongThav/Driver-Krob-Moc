import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import {splashScreen1} from '../../constants/img';
import {fontSize} from '../../constants/FontSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { push } from '../../services/navigate/Index';
import { ColorApp } from '../../constants/Color';

const {width, height} = Dimensions.get('window');

const dataBox = [
  {
    id: '1',
    title: 'Khmer',
    img: require('../../assets/khmer.png'),
  },
  {
    id: '2',
    title: 'English',
    img: require('../../assets/english.png'),
  },
];

const LanguageScreen = () => {
  return (
    <>
    {/* <StatusBar
        animated={true}
        backgroundColor="#ffd0f6"
      /> */}
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={splashScreen1}
        style={styles.imgBg}>
        <View style={{flex: 1, marginVertical: '18%'}}>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/logo.png')}
              style={{flex: 1, height: undefined, width: undefined}}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.txtlang}>LANGUAGE</Text>
            <Text style={styles.txtChoose}>Please choose language below</Text>
            {dataBox.map((e, index) => {
              return (
                <TouchableOpacity activeOpacity={0.8} key={index} onPress={()=>{
                  console.log(index);
                  // push('LoginScreen');
                  if(e.title === 'Khmer'){
                    push('LoginScreen');
                  }else if(e.title === 'English'){
                    push('LoginScreen');
                  }else{

                  }
                }} style={{backgroundColor: '#edeff3', marginTop: index == 1 ? 10 : 0, borderRadius: 10}}>
                <View style={[{backgroundColor: '#edeff3', borderRadius: 10,}]}>
                <View
                  key={index}
                  style={[styles.card,]}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.imgCard}>
                      <Image
                        source={e.img}
                        style={{
                          flex: 1,
                          width: 50,
                          height: 50,
                          padding: 0,
                          borderRadius: 50 / 2,
                          margin: 0,
                        }}
                      />
                    </View>
                    <Text style={styles.txtTitle}>{e.title}</Text>
                  </View>
                  <AntDesign
                    color={'grey'}
                    style={styles.icon}
                    name="right"
                    size={20}
                  />
                </View>
                </View>
                </TouchableOpacity>
              );
            })}
            <View style={{marginBottom: 15}} />
          </View>
          <View style={styles.bottom}>
            <View
              style={{
                width: width * 0.12,
                height: 2,
                backgroundColor: 'white',
                opacity: 0.5,
              }}
            />
            <Text style={styles.txtDriverApp}>DRIVER APP</Text>
            <View
              style={{
                width: width * 0.12,
                height: 2,
                backgroundColor: 'white',
                opacity: 0.5,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
    </>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
  },
  logo: {
    width: width * 0.39,
    height: height * 0.17,
    alignSelf: 'center',
  },
  box: {
    paddingHorizontal: width * 0.08,
    paddingVertical: 30,
    backgroundColor: ColorApp.darkLight,
    marginHorizontal: 15,
    marginVertical: height * 0.06,
    borderRadius: 15,
    opacity: 0.65,
  },
  txtlang: {
    fontSize: 28,
    textAlign: 'center',
    color: 'black',
  },
  txtChoose: {
    fontSize: fontSize.font15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
    marginBottom: height * 0.05,
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255, 1)'
  },
  imgCard: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    // backgroundColor: 'grey',
  },
  txtTitle: {
    textAlign: 'center',
    marginTop: 11,
    marginLeft: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 11,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  txtDriverApp: {
    marginHorizontal: 15,
    fontSize: fontSize.font18,
    color: 'white',
    opacity: 0.8,
  },
});
