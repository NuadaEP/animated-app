import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages';
import Timing from './pages/Timing';
import Depend from './pages/Depend';

export default function Router() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Simple animations" component={Timing} />
        <Drawer.Screen name="Divide" component={Depend} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
