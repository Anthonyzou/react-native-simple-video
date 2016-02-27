
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

  };


  constructor(props) {
    super(props);
    this.state = {
      style : {width: 1, height: 1 }
    }

    this._onChange = this._onChange.bind(this);
  }

  _onChange(event: Event) {
    this.setState({style:event.nativeEvent})
  }

  render() {
    const {height, width} = Dimensions.get('window');
    return <VideoView style={
      {
        width: Math.min(this.state.style.width, width ),
        height: Math.min(this.state.style.height, height )
      }
    }
    onChange={this._onChange} {...this.props} />;
  }
}

const VideoView = requireNativeComponent('VideoPlayer', VideoPlayer, {
  nativeOnly: {onChange: true}
});
