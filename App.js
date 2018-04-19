/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, TouchableOpacity, Animated } from 'react-native';
import Animation from 'lottie-react-native';
import intelia from './assets/hamburger_menu.json';
import DatePicker from 'react-native-datepicker';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import PureChart from 'react-native-pure-chart';

const { height, width } = Dimensions.get('window');
LocaleConfig.locales['kh'] = {
  monthNames: ['មករា', 'កុម្ភ:', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
  dayNamesShort: ['អាទិ', 'ច័ន្ទ', 'អង្គា', 'ពុធ', 'ព្រហ', 'សុក្រ', 'សៅរ៍']
};

LocaleConfig.defaultLocale = 'kh';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0);
  }
  showCalendar = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 300
    }).start();
  }
  render() {
    const animatedStyle = {
      transform: [
        { scale: this.animatedValue },
      ],
    }
    let sampleData = [
      {
        // seriesName: 'series1',
        data: [
          { x: '01-2018', y: 200000 },
          { x: '02-2018', y: 510500 },
          { x: '03-2018', y: 405000 },
          { x: '04-2018', y: 716000 },
          { x: '05-2018', y: 603000 }
        ],
        color: '#26de81'
      }
    ]

    return (

      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.showCalendar}
          style={{ width: width - 100, height: 40, backgroundColor: '#d1d8e0', marginTop: 50, padding: 10, }}>
          <Text>ថ្ងៃ-ខែ-ឆ្នាំ</Text>
        </TouchableOpacity>
        {/* <Animated.View style={[{ justifyContent: 'center', alignItems: 'center' }, animatedStyle]}>
          <Calendar
            theme={{
              arrowColor: 'gray',
              'stylesheet.calendar.header': {
                week: {
                  marginTop: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }
              }
            }}
          />
        </Animated.View> */}
        <PureChart data={sampleData} type='bar' />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'gray'
  }
});
