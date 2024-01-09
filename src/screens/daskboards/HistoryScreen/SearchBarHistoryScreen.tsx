import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {ColorApp} from '../../../constants/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontSize} from '../../../constants/FontSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const listDownSearch = [
  {
    id: '1',
    delete: 'clear',
    num: '#00000014',
    title: 'Completed',
  },
  {
    id: '2',
    delete: 'clear',
    num: '#00000012',
    title: 'Completed',
  },
  {
    id: '3',
    delete: 'clear',
    num: '#00000013',
    title: 'Rejected',
  },
  {
    id: '4',
    delete: 'clear',
    num: '#00000013',
    title: 'Rejected',
  },
];

const SearchBarHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frmSearchBar}>
        <AntDesign
          style={{marginTop: 5, marginRight: 8}}
          onPress={() => {}}
          name="search1"
          size={20}
          color={ColorApp.red}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Search order number"
          placeholderTextColor={'grey'}
        />
      </View>
      <View style={styles.rowTitle}>
        <Text style={styles.txtRecent}>Recent Searches</Text>
        <AntDesign color={ColorApp.red} size={18} name="delete" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 15}}>
          {listDownSearch.map((e, index) => {
            return (
              <View key={index} style={styles.row}>
                <Text style={{color: 'grey', fontWeight: '600', fontSize: 16}}>
                  {e.num}
                </Text>
                <View style={styles.rowRight}>
                  <Text
                    style={{
                      fontSize: fontSize.font14,
                      color: 'grey',
                      marginRight: 30,
                    }}>
                    {e.title}
                  </Text>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: 'white',
                      borderRadius: 25 / 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <MaterialIcons color={'grey'} size={18} name="clear" />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchBarHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorApp.bgColor,
  },
  txtInput: {
    padding: 0,
    color: 'grey',
    fontSize: fontSize.font16,
    width: '90%',
  },
  frmSearchBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  rowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
  },
  txtRecent: {
    fontSize: fontSize.font16,
    color: 'black',
    opacity: 0.8,
    fontWeight: '500',
  },
  rowRight: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
});
