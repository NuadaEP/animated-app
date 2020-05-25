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

function Depend() {
  const [ballY] = useState(new Animated.Value(0));
  const [ballX] = useState(Animated.divide(ballY, 2));

  const animate = useCallback(() => {
    Animated.decay(ballY, {
      velocity: 1,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  useEffect(animate, [ballY]);

  return (
    <SafeAreaView style={style.container}>
      <Button
        title="Reset"
        style={style.button}
        onPress={() => {
          ballY.setValue(0);
          animate();
        }}
      />
      <View style={style.content}>
        <Text>Devide</Text>
      </View>
      <View style={style.animatedContent}>
        <Animated.View style={[style.ball, {top: ballY, left: ballX}]} />
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
  },
  animatedContent: {
    flexDirection: 'row',
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

export default Depend;
