import React from 'react';
import { View, Text } from 'react-native';

const Time = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{props.time2}</Text>
      <Text style={styles.dateText}>{props.date2}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeText: {
    color: '#999999',
    fontSize: 60
  },
  dateText: {
    color: '#999999',
    fontSize: 40
  }
}


export default Time;
