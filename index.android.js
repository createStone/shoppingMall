/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Navigator
} from 'react-native';

var LaunchImage = require('./component/Main/Launch');

class shoppingMall extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{component:LaunchImage}}
            renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route} navigator={navigator}/>
            }}
        >

        </Navigator>


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
});

AppRegistry.registerComponent('shoppingMall', () => shoppingMall);
