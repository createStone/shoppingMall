/**
 * Created by xuanxuan on 16/9/1.
 */
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
    TouchableOpacity
} from 'react-native';




var Detail = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        this.gotoDetail();
                    }}>
                    <Text style={styles.welcome}>
                        Detail
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },
    gotoDetail(){

        this.props.navigator.pop();
    }
})


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    }
});

module.exports = Detail;
