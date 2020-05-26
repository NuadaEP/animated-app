import React, {useState} from 'react';

import {
  View,
  Image,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';

import User from './User';

const {width} = Dimensions.get('window');

export default function Core() {
  const [state, setState] = useState({
    userSelected: null,
    userInfoVisible: false,
    users: [
      {
        id: 1,
        name: 'Diego Fernandes',
        description: 'Head de programação!',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        thumbnail:
          'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80',
        likes: 200,
        color: '#57BCBC',
      },
      {
        id: 2,
        name: 'Robson Marques',
        description: 'Head de empreendedorismo!',
        avatar: 'https://avatars2.githubusercontent.com/u/861751?s=460&v=4',
        thumbnail:
          'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80',
        likes: 350,
        color: '#E75A63',
      },
      {
        id: 3,
        name: 'Cleiton Souza',
        description: 'Head de mindset!',
        avatar: 'https://avatars0.githubusercontent.com/u/4669899?s=460&v=4',
        thumbnail:
          'https://images.unsplash.com/photo-1506440905961-0ab11f2ed5bc?auto=format&fit=crop&w=400&q=80',
        likes: 250,
        color: '#2E93E5',
      },
      {
        id: 4,
        name: 'Robson Marques',
        description: 'Head de empreendedorismo!',
        avatar: 'https://avatars2.githubusercontent.com/u/861751?s=460&v=4',
        thumbnail:
          'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80',
        likes: 350,
        color: '#E75A63',
      },
    ],
  });
  const [scrollOffset] = useState(new Animated.Value(0));

  const selectUser = (user) => {
    setState({...state, userSelected: user, userInfoVisible: true});
  };

  const renderDetail = () => (
    <View>
      <User user={state.userSelected} onPress={() => {}} />
    </View>
  );

  const renderList = () => (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollOffset},
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}>
        {state.users.map((user) => (
          <User key={user.id} user={user} onPress={() => selectUser(user)} />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Animated.View
        style={[
          styles.header,
          {
            height: scrollOffset.interpolate({
              inputRange: [0, 140],
              outputRange: [200, 60],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <Image
          style={styles.headerImage}
          source={
            state.userSelected ? {uri: state.userSelected.thumbnail} : null
          }
        />

        <Animated.Text
          style={[
            styles.headerText,
            {
              fontSize: scrollOffset.interpolate({
                inputRange: [120, 140],
                outputRange: [24, 16],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          {state.userSelected ? state.userSelected.name : 'GoNative'}
        </Animated.Text>
      </Animated.View>
      {state.userInfoVisible ? renderDetail() : renderList()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    paddingHorizontal: 15,
    backgroundColor: '#2E93E5',
  },

  headerImage: {
    ...StyleSheet.absoluteFillObject,
  },

  headerText: {
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 15,
    bottom: 20,
  },
});
