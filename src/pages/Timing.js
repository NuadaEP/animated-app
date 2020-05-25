import 'react-native-gesture-handler';
import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  View,
  Text,
  Button,
} from 'react-native';

function Timing() {
  const [ballY] = useState(new Animated.Value(0));
  const [ballYSpring] = useState(new Animated.Value(0));
  const [ballYDecay] = useState(new Animated.Value(0));

  const animate = useCallback(() => {
    Animated.timing(ballY, {
      duration: 1000,
      toValue: 500,
      useNativeDriver: false,
    }).start();

    Animated.spring(ballYSpring, {
      toValue: 500,
      bounciness: 30,
      useNativeDriver: false,
    }).start();

    Animated.decay(ballYDecay, {
      velocity: 1,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(animate, [ballY, ballYSpring, ballYDecay]);

  return (
    <SafeAreaView style={style.container}>
      <Button
        title="Reset"
        style={style.button}
        onPress={() => {
          ballY.setValue(0);
          ballYSpring.setValue(0);
          ballYDecay.setValue(0);
          animate();
        }}
      />
      <View style={style.content}>
        <Text>timing</Text>
        <Text>spring</Text>
        <Text>decay</Text>
      </View>
      <View style={style.animatedContent}>
        <Animated.View style={[style.ball, {top: ballY}]} />
        <Animated.View style={[style.ball, {top: ballYSpring}]} />
        <Animated.View style={[style.ball, {top: ballYDecay}]} />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  animatedContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00',
  },
  button: {
    marginBottom: 20,
  },
});

export default Timing;
