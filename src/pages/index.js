import React from 'react';
import {View, Button} from 'react-native';

const pages = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Button title="Open Menu" onPress={() => navigation.openDrawer()} />
  </View>
);

export default pages;
