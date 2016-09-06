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
    Image,
    Navigator
} from 'react-native';



var Main = require('./Main')
var Launch = React.createClass({
    render() {
        return (
                <Image style={styles.launchImageStyle} source={{uri:'launchImage'}}/>
        );
    },
    componentDidMount(){
        setTimeout(()=>{
                    this.props.navigator.replace({component:Main})
                },2000);
    }
})


const styles = StyleSheet.create({
    launchImageStyle:{
        flex:1,
    }
});

module.exports = Launch;
