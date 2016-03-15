/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ToastAndroid,
} from 'react-native';

import Video from './video.js';

class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          onLoad={()=>{
            ToastAndroid.show('loaded', 2000)
          }}
          src={ "http://ak.picdn.net/shutterstock/videos/3579401/preview/stock-footage-heavy-rain-on-water-shooting-with-high-speed-camera-phantom-flex.webm"}/>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image:{
  }
});

AppRegistry.registerComponent('example', () => example);
