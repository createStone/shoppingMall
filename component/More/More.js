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
    Platform,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var CommonCell = require('./CommonCell')

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <ScrollView>
                        <View style={{marginTop:10}}>
                            <CommonCell
                                title={'扫一扫'}
                                 press = {()=>{ alert('扫一扫')} }
                            ></CommonCell>
                        </View>

                        <View style={{marginTop:10}}>
                            <CommonCell title={'省流量模式'}
                                        press = {()=>{ alert('省流量模式')}}
                                        isSwitch = {true}

                            ></CommonCell>
                                <CommonCell title={'消息提醒'}
                                            press = {()=>{ alert('消息提醒')} }
                                ></CommonCell>
                                <CommonCell title={'邀请好友'}
                                            press = {()=>{ alert('邀请好友')} }
                                ></CommonCell>
                            <CommonCell title={'清空缓存'}
                                        press = {()=>{ alert('清空缓存')}}
                                        rightTitle={'1.95'}
                            ></CommonCell>
                        </View>

                        <View style={{marginTop:10}}>
                            <CommonCell title={'意见反馈'}
                                        press = {()=>{ alert('dddd')} }
                            ></CommonCell>
                            <CommonCell title={'问卷调查'}
                                        press = {()=>{ alert('dddd')} }
                            ></CommonCell>
                            <CommonCell title={'支付帮助'}
                                        press = {()=>{ alert('dddd')} }
                            ></CommonCell>
                            <CommonCell title={'网络诊断'}
                                        press = {()=>{ alert('dddd')} }
                            ></CommonCell>
                            <CommonCell title={'关于美团'}
                                        press = {()=>{ alert('dddd')} }
                            ></CommonCell>
                            <CommonCell title={'我要应聘'}
                                        press = {()=>{ alert('dddd')} }
                            ></CommonCell>
                        </View>

                        <View style={{marginTop:10}}>
                            <CommonCell title={'精品应用'}
                                        press = {()=>{ alert('dddd')} }
                            ></CommonCell>
                        </View>
                    </ScrollView>

            </View>
        );
    },

    renderHeader(){

            return (<View style={styles.navBarStyle}>
                <Text style={styles.titleStyle}>上海</Text>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>{this.settting()}} style={styles.settingBtn}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.imageStyle}></Image>
                </TouchableOpacity>

            </View>);
    },
    settting(){
        alert('qweqwe');
    }
})


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8',

    },
    navBarStyle:{
        height:Platform.OS === 'ios'? 64 :44,
        backgroundColor:"rgba(239,97,0,1.0)",
        flexDirection:'row',
        justifyContent:'center',
        paddingTop: Platform.OS === 'ios'? 20 :0,
        alignItems:'center'
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    imageStyle:{
        width:30,
        height:30,

    },
    settingBtn:{
        position:'absolute',
        right:5,
        bottom:8
    }

});

module.exports = More;
