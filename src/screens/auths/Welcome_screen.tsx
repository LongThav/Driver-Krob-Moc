import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {splashScreen1} from '../../constants/img';
import {push, replace} from '../../services/navigate/Index';
import {useNavigation} from '@react-navigation/native';
import {white} from '../../constants/Color';

const {width, height} = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const init = async () => {
      setTimeout(() => {
        replace('LanguageScreen');
      }, 1500);
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <>
      {/* <StatusBar
        animated={true}
        backgroundColor="#ffd0f6"
      /> */}
      <View style={{flex: 1}}>
        <Image source={splashScreen1} style={styles.img} />
        <View style={styles.col}>
          <Text style={styles.txtWelcome}>Welcome to</Text>
          <View style={styles.coverImg}>
            <Image
              source={require('../../assets/logo.png')}
              style={{flex: 1, height: undefined, width: undefined}}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  col: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    bottom: 0,
    top: 0,
    justifyContent: 'center',
  },
  txtWelcome: {
    fontSize: 28,
    color: 'white',
  },
  coverImg: {
    marginTop: height * 0.06,
    width: width * 0.5,
    height: height * 0.22,
  },
});
