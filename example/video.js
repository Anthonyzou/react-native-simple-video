
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

  }

  onLoad(event: Event){
    this.setState({style:event.nativeEvent})
    if(this.props.onLoad) this.props.onLoad()
  }

  render() {
    const {height, width} = Dimensions.get('window');
    const dimens = {
      width: Math.min(this.state.style.width, width ),
      height: Math.min(this.state.style.height, height )
    }
    return <VideoView {...this.props} style={dimens} onLoad={this.onLoad.bind(this)} />;
  }
}

const VideoView = requireNativeComponent('VideoPlayer', VideoPlayer, {
  nativeOnly: {}
});
