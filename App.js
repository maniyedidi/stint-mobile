import * as React from 'react';
import { WebView } from 'react-native-webview';
import registerPushNotificationsAsync from './push.notification';
const sourceUri = 'https://www.stint.do/';
export default class App extends React.Component {

  componentDidMount(){
    registerPushNotificationsAsync();    
  }

  onMessage = (event) => {
    const { title, message } = JSON.parse(event.nativeEvent.data)
    Alert.alert(
      title,
      message,
      [],
      { cancelable: true }
    );
  }
  render() {
    return <WebView
      source={{ uri: sourceUri }}
      javaScriptEnabled={true}
      originWhitelist={['*']}
      allowFileAccess={true}
      onMessage={this.onMessage}
    />
  }
}