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

function Linked() {
  const [ballY] = useState(new Animated.Value(0));
  const [ballX] = useState(new Animated.Value(0));

  const [ballYLooping] = useState(new Animated.Value(0));
  const [ballXLooping] = useState(new Animated.Value(0));

  const animate = useCallback(() => {
    Animated.stagger(100, [
      Animated.timing(ballY, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }),

      Animated.timing(ballX, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(ballYLooping, {
          toValue: 200,
          duration: 300,
          useNativeDriver: false,
        }),

        Animated.delay(300),

        Animated.timing(ballXLooping, {
          toValue: 200,
          duration: 300,
          useNativeDriver: false,
        }),

        Animated.delay(300),

        Animated.timing(ballYLooping, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),

        Animated.delay(300),

        Animated.timing(ballXLooping, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),

        Animated.delay(300),
      ]),
    ).start();
  }, [ballY, ballX, ballXLooping, ballYLooping]);

  useEffect(animate, [ballY]);

  return (
    <SafeAreaView style={style.container}>
      <Button
        title="Reset"
        style={style.button}
        onPress={() => {
          ballY.setValue(0);
          ballX.setValue(0);
          ballYLooping.setValue(0);
          ballXLooping.setValue(0);
          animate();
        }}
      />
      <View style={style.content}>
        <Text>stagger</Text>
      </View>
      <View style={style.animatedContent}>
        <Animated.View style={[style.ball, {top: ballY, left: ballX}]} />
      </View>

      <View style={style.content}>
        <Text>looping</Text>
      </View>
      <View style={style.animatedContent}>
        <Animated.View
          style={[style.ball, {top: ballYLooping, left: ballXLooping}]}
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
  },
  animatedContent: {
    height: 200,
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

export default Linked;
