/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Video from 'react-native-video';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          width: 200,
          height: 200
        }}>
          <Video
            source={{uri: 'https://stream.mux.com/DVvrwBy5l8Kv7028lVNVA6HzXEM700yNLy.m3u8', type: 'm3u8'}}
            ref={player => {this.player = player;}}
            onLoad={e => console.log(e)}
            style={{
              backgroundColor: '#000',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            hls={true}
            paused={false}
          />
        </View>
        <Button title="Play " onPress={(e) => {
          console.log(this.player.seek(2));
          // this.player.play()
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
