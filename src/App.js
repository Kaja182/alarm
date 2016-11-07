import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TimePickerAndroid } from 'react-native';
import PushNotification from 'react-native-push-notification';
import moment from 'moment';

import Noti from './Noti';
import Header from './Header';
import Time from './Time';
import DatePicker from './DatePicker.js';

class App extends Component {

  state = {
    time2: moment().format('HH:mm'),
    date2: moment().format('LL'),
    isoFormatText: 'Pick a time',
    datetime: '11-10-2016 14:50'
  };



  onAlarmAdd() {
    console.log('added');
    PushNotification.localNotificationSchedule({
        id: '1',
        title: "Alarm app",
        date: moment(this.state.datetime)._d,
        message: "WAke up!!",
        soundName: 'rand.mp3',
        playSound: true
      })
    }

  render() {

    console.log('datetime state je:'+this.state.datetime)
    console.log(moment(this.state.datetime)._d)


    setTimeout(() => {
      this.setState({
        time2: moment().format('HH:mm'),
        date2: moment().format('LL')
      })
    }, 60000)

    return(
      <View>
        <Header headerText={'Alarm App'} />
        <Time
          time2={this.state.time2}
          date2={this.state.date2}
        />
       <DatePicker
         style={{width: 300}}
         customStyles={{dateInput: {
            marginLeft: 67
          }}}
         date={this.state.datetime}
         mode="datetime"
         format="MM-DD-YYYY HH:mm"
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         showIcon={false}
         onDateChange={(datetime) => {this.setState({datetime: datetime}); this.onAlarmAdd()}}
       />
       <Text style={styles.instructions}>datetime: {this.state.datetime}</Text>
        <Noti />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    color: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

function _formatTime(hour, minute) {
  return hour + ':' + (minute < 10 ? '0' + minute : minute);
}

export default App;
