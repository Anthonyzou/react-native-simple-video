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
  TouchableHighlight
} from 'react-native';

import Video from './video.js';

class example extends Component {
  constructor(){
    super();
    this.state = {
      controls : false
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={{backgroundColor:'white'}}
          onPress={()=>{
            this.setState({controls:!this.state.controls})
          }}>
          <Text>toggle controls</Text>
        </TouchableHighlight>
        <Video
          onLoad={()=>{
            ToastAndroid.show('loaded', 2000)
          }}
          controls={this.state.controls}
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
});

AppRegistry.registerComponent('example', () => example);
