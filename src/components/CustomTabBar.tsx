import React from 'react';

import {
  View,
  Pressable,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import {fontSize} from '../constants/FontSize';
import {ColorApp} from '../constants/Color';
// import NavigationIcon from './navigationIcon';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const {width} = Dimensions.get('window');

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
    icon: require('../assets/union.png'),
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

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <ImageBackground
      source={require('../assets/bottom.png')}
      style={styles.customizeBottomBar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <View key={index} style={[styles.mainItemContainer]}>
            {
              <Pressable
                onPress={onPress}
                style={
                  {
                  }
                }>
                <View style={styles.CustomizeItem}>
                  <View>
                    {itemBottom[index].id === '3' ? (
                      <View style={styles.circle}>
                        <SimpleLineIcons
                          size={45}
                          name="speedometer"
                          color={isFocused ? ColorApp.puple : '#d6d6d6'}
                        />
                      </View>
                    ) : (
                      <Image
                        tintColor={isFocused ? 'white' : '#d6d6d6'}
                        source={itemBottom[index].icon}
                        style={{
                          width: 25,
                          height: 25,
                          alignSelf: 'center',
                        }}
                      />
                    )}
                    <Text
                      style={[
                        styles.txtLabel,
                        {color: isFocused ? 'white' : '#d6d6d6'},
                      ]}>
                      {itemBottom[index].title}
                    </Text>
                  </View>
                </View>
                {/* {
                    itemBottom[index].title === 'Assigned'?
                    <Text>{itemBottom[index].title}</Text> : <Text>Hi</Text>
                } */}
              </Pressable>
            }
          </View>
        );
      })}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    // backgroundColor: '#182028',
    borderRadius: 25,
    marginHorizontal: width * 0.1,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    // borderColor: '#333B42',
    // backgroundColor: 'red',
  },
  customizeBottomBar: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CustomizeItem: {
    // backgroundColor: 'red',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  txtLabel: {
    fontSize: fontSize.font15,
    color: 'white',
    marginTop: 5,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    // position: 'absolute',
    // bottom: 15,
    // left: -width * 0.135,
    borderWidth: 5,
    borderColor: '#fcddec',
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    bottom: 40,
    right: 1
  },
});

export default CustomTabBar;
