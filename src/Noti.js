import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PushNotification from 'react-native-push-notification';

class Noti extends Component {

  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
       console.log( 'NOTIFICATION:', notification );
     },
    });
  }

  render() {
    return null;
  }
}

export default Noti;
