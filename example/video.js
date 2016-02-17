
import React,{
  requireNativeComponent, Component, PropTypes, View
} from 'react-native';

class PDFView extends Component {
  static propTypes = {
    ...View.propTypes,
    src: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  _onChange(event: Event) {
    this.props.onLoadComplete && this.props.onLoadComplete(event.nativeEvent.value);
  }

  render() {
    return <VideoView {...this.props} />;
  }
}

const VideoView = requireNativeComponent('VideoPlayer', PDFView, {
  nativeOnly: {onChange: true}
});

export default PDFView;
