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

function Interpolate() {
  const [ballY] = useState(new Animated.Value(0));
  const [ballYSpring] = useState(new Animated.Value(0));
  const [ballYDecay] = useState(new Animated.Value(0));

  const animate = useCallback(() => {
    Animated.timing(ballY, {
      duration: 1000,
      toValue: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(animate, [ballY]);

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
        <Text>interpolate</Text>
      </View>
      <View style={style.animatedContent}>
        <Animated.View
          style={[
            style.ball,
            {
              top: ballY,
              opacity: ballY.interpolate({
                inputRange: [0, 300],
                outputRange: [1, 0.4],
                extrapolate: 'clamp',
              }),
            },
          ]}
        />
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

export default Interpolate;
