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
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';


var Detail = require('./Detail')
var TopView = require('./TopView')
var MiddleView = require('./MiddleView')
var BottomMiddleView = require('./BottomMiddleView')
var ShoppingCenter = require('./ShoppingCenter')
var HotChannel = require("./HotChannel")
var GeustYouLike = require('./GeustYouLike')

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                {this.renderNabBar()}
                <ScrollView>
                    {/*topView*/}
                    <TopView></TopView>
                    {/*MiddleView*/}
                    <MiddleView></MiddleView>

                    {/*BottomMiddleView*/}
                    <BottomMiddleView></BottomMiddleView>
                    {/*shoppingcenter*/}
                    <ShoppingCenter></ShoppingCenter>

                    {/*热门频道*/}
                    <HotChannel/>
                    {/*猜你喜欢*/}
                    <GeustYouLike/>
                </ScrollView>
            </View>
        );
    },




    renderNabBar(){
        return (
            <View style={styles.navBarStyle}>
                <Text style={styles.leftButtonStyle}>上海</Text>
                <TextInput
                    placeholder={'输入商家、品类、商圈'}
                    style={styles.inputStyle}></TextInput>
                <View style={styles.rightBoxStyle}>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.imageStyle}></Image>
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.imageStyle}></Image>
                </View>
            </View>
        );
    },
    gotoDetail(){
        this.props.navigator.push({
            title:'detail',
            component:Detail
        })
    }

})


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e8e8e8',
        flex:1
    },
    navBarStyle:{
        height:Platform.OS === 'ios'? 64 :44,
        backgroundColor:"rgba(239,97,0,1.0)",
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: Platform.OS === 'ios'? 20 :0,
        alignItems:'center'
    },
    leftButtonStyle:{
        color:'white',
        paddingLeft:5,
        fontSize:16
    },
    inputStyle:{
        flex:1,
        height:30,
        backgroundColor:'white',
        margin:7,
        borderRadius:15,
        fontSize:14,
        paddingLeft:10,
    },
    imageStyle:{
        width:30,
        height:30,
        margin:2
    },
    rightBoxStyle:{
        flexDirection:"row"
    }
});

module.exports = Home;
