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
  // Image,
} from 'react-native';
import Video from './video.js'

class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video style={styles.image} source={{ uri: "http://ak.picdn.net/shutterstock/videos/3579401/preview/stock-footage-heavy-rain-on-water-shooting-with-high-speed-camera-phantom-flex.webm"}}></Video>
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image:{
    width: width,
    flex:1,
  }
});

AppRegistry.registerComponent('example', () => example);
