import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Route from './src/services/navigate/Route';
import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Route />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
