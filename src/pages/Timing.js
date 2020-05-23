import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Animated} from 'react-native';

function Timing() {
  const [ballY] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(ballY, {
      duration: 1000,
      toValue: 500,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  return (
    <SafeAreaView style={style.container}>
      <Animated.View style={[style.ball, {top: ballY}]} />
    </SafeAreaView>
  );
}

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

export default Timing;
