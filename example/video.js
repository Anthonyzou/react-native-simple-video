
import React,{
  requireNativeComponent,
  Component,
  PropTypes,
  View,
  Dimensions,
} from 'react-native';

export default class VideoPlayer extends Component {
  static propTypes = {
    ...View.propTypes,
    src: PropTypes.string.isRequired,
    seek: PropTypes.number,
    onLoad: PropTypes.func,
  };


  constructor(props) {
    super(props);
    this.state = {
      style : {width: 1, height: 1 }
    }

    this.onLoad = this.onLoad.bind(this);
  }

  onLoad(event: Event){
    this.setState({style:event.nativeEvent})
  }

  render() {
    const {height, width} = Dimensions.get('window');
    const dimens = {
      width: Math.min(this.state.style.width, width ),
      height: Math.min(this.state.style.height, height )
    }
    return <VideoView style={dimens} onLoad={this.onLoad} {...this.props}/>;
  }
}

const VideoView = requireNativeComponent('VideoPlayer', VideoPlayer, {
  nativeOnly: {}
});
