
import {
  requireNativeComponent,
  View,
  Dimensions,
} from 'react-native';

import React,{
  Component,
  PropTypes,
} from 'react';


export default class VideoPlayer extends Component {
  static propTypes = {
    ...View.propTypes,
    src: PropTypes.string.isRequired,
    seek: PropTypes.number,
    onLoad: PropTypes.func,
    controls : PropTypes.bool,
  };

  static defaultProps = {
    controls : true
  };

  constructor(props) {
    super(props);
    const {height, width} = Dimensions.get('window');
    this.state = {
      loaded: false,
      style : {width: width, height: height }
    }
  }

  onLoad(event: Event){
    this.setState({
      style:event.nativeEvent,
      loaded: true
    });
    if(this.props.onLoad) this.props.onLoad();
  }

  render() {
    const {height, width} = Dimensions.get('window');
    const dimens = {
      width: Math.min(this.state.style.width, width ),
      height: Math.min(this.state.style.height, height),
      opacity: this.state.loaded ? 1 : 0,
    }
    return <VideoView {...this.props}
      controls={this.props.controls}
      style={dimens}
      onLoad={this.onLoad.bind(this)}/>;
  }
}

const VideoView = requireNativeComponent('VideoPlayer', VideoPlayer, {
  nativeOnly: {}
});
