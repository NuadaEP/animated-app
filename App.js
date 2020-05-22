import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView style={style.container}>
    <View style={style.ball} />
  </SafeAreaView>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00',
  },
});

export default App;
