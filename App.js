import React, {Component} from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView, createAppContainer, createBottomTabNavigator } from 'react-navigation';

const testData = new Array(200).fill('hello world');

const TestScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView style={{ flex: 1, backgroundColor: 'red' }}>
      {testData.map((e, i) => (<Text key={i}>{e}</Text>))}
    </ScrollView>
  </SafeAreaView>
);

const Tabs = createBottomTabNavigator({
  Tab1: {
    screen: TestScreen,
    navigationOptions: {
        title: 'Tab1',
    }
  },
  Tab2: {
    screen: TestScreen,
    navigationOptions: {
        title: 'Tab2',
    }
  },
  Tab3: {
    screen: TestScreen,
    navigationOptions: {
        title: 'Tab3',
    }
  },
});

const Root = createAppContainer(Tabs);


export default class App extends Component {
  render() {
    return (
      <Root />
    );
  }
}
