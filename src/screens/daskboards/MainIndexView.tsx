import {StyleSheet, Text, View,  TextInput} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const itemBottom = [
  {
    id: '1',
    title: 'Assigned',
    icon: require('../../assets/assign.png'),
  },
  {
    id: '2',
    title: 'My Job',
    icon: require('../../assets/myjob.png'),
  },
  {
    id: '3',
  },
  {
    id: '4',
    title: 'History',
    icon: require('../../assets/history.png'),
  },
  {
    id: '5',
    title: 'Account',
    icon: require('../../assets/account.png'),
  },
];

const MainIndexView = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.bottomBar}>

      </View>
      <View style = {styles.itemBottom}>

      </View> */}
      <View style={{height: '98%',}}>
      <TextInput placeholder='Placeholder'/>

      {
          itemBottom.map((e, index)=>{
            console.log("title: ", e.title);
            return <Text style={{flexDirection: 'row', justifyContent: 'space-between'}}>{e.title}</Text>
          })
        }
        <FlatList
        horizontal = {true}
        data={itemBottom}
        renderItem={({item, index})=>{
          return <Text>{item.title}</Text>
        }}
        >

        </FlatList>
      </View>
      <View style={{height: '2%', }}>
        <Image
          style={[styles.imgBottom, {position: 'absolute'}]}
          source={require('../../assets/Subtraction1.png')}
        />
        {
          itemBottom.map((e, index)=>{
            console.log("title: ", e.title);
            return <Text>Hi</Text>
          })
        }
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Hi</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </View> */}
      </View>
    </View>
  );
};

export default MainIndexView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    width: '100%',
    height: '10.4%',
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    borderRadius: 20,
    // backgroundColor: 'red'
  },
  imgBottom: {
    // width: 'auto'
    flex: 1,
    // height: '90%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    
  },
  itemBottom: {
    width: 'auto',
    height: 20,
    backgroundColor: 'red',
  },
});
