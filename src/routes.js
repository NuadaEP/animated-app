import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages';
import Timing from './pages/Timing';
import Depend from './pages/Depend';
import Linked from './pages/Linked';
import Interpolate from './pages/Interpolate';
import Interact from './pages/Interact';

export default function Router() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Simple Animations" component={Timing} />
        <Drawer.Screen name="Divide Animation" component={Depend} />
        <Drawer.Screen name="Linked Animation" component={Linked} />
        <Drawer.Screen name="Interpolate Animation" component={Interpolate} />
        <Drawer.Screen name="Interact Animation" component={Interact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
