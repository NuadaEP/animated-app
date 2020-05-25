import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  View,
  Text,
  PanResponder,
} from 'react-native';

function Interact() {
  const [ball] = useState(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  );

  const _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (event, gestureState) => true,

    onPanResponderGrant: (event, gestureState) => {
      ball.setOffset({
        x: ball.x._value,
        y: ball.y._value,
      });

      ball.setValue({x: 0, y: 0});
    },

    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: ball.x,
          dy: ball.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),

    onPanResponderRelease: () => {
      ball.flattenOffset();
    },
  });

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text>Move the ball</Text>
      </View>
      <View style={style.animatedContent}>
        <Animated.View
          {..._panResponder.panHandlers}
          style={[
            style.ball,
            {
              transform: [{translateX: ball.x}, {translateY: ball.y}],
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

export default Interact;
