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
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';

var MineCell = require('../Mine/MineCell')



var Detail = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderTop()}
                {this.renderBottom()}
            </View>
        );
    },
    renderTop(){

        return (<MineCell  title={'猜你喜欢'}
                            icon={'cnxh'}
                             rightTitle={''}
                           rightIcon={''} >

        </MineCell>)
    },
    renderBottom(){
        return <LItem></LItem>
    }

})



var LItem = React.createClass({
    getDefaultProps(){
        return{
            api_url:'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },
    getInitialState(){
            var dataSource =  new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        return {
            dataSource : dataSource
        }
    },

    render() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            >



            </ListView>
        );
    },

    renderRow(rowData){
        return (<TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(rowData.title)}}>
            <View style={styles.itemContainer}>
            <Image source={{uri:this.handlerUrl(rowData.imageUrl)}} style={styles.image}></Image>
            <View style={styles.rightStyle}>
                <View style={styles.rightTopStyle}>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                    <Text style={styles.numStyle} >{rowData.topRightInfo}</Text>
                </View>
                <Text style={styles.nameStyle}>{rowData.subTitle}</Text>
                <View style={styles.rightBottomStyle}>
                    <Text style={styles.price}>{rowData.mainMessage}{rowData.mainMessage2}</Text>
                    <Text style={styles.numStyle}>{rowData.bottomRightInfo}</Text>
                </View>
            </View>
            </View>
        </TouchableOpacity>)
    },


    handlerUrl(url){
        if (url.search('w.h') == -1){
            return url;
        }

        return url.replace('w.h','120.90')
    },
    componentDidMount(){
        this.loadDataFromNet();
    },

    loadDataFromNet(){
        fetch(this.props.api_url).
        then((responseData)=>
            responseData.json()
        ).then((response)=>{
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(response.data)
            });
        }).catch((e)=>{

            var likeData = require('../../LocalData/HomeGeustYouLike.json')
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(likeData.data)
            });
        })
    }




})







const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    itemContainer:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'white',
        marginBottom:1,
    },
    image:{
        width:97,
        height:84,
        borderRadius:6

    },
    rightStyle:{
        marginLeft:10,
        marginRight:10,
        flex:1
    },
    rightTopStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleStyle:{
        fontSize:16,
        fontWeight:'bold'
    },
    numStyle:{
        color:'#6c6c6c'
    },
    rightBottomStyle:{
        flexDirection:'row',
        justifyContent:'space-between',

        flex:1,
        paddingBottom:4,
        alignItems:'flex-end'
    },
    price:{
        color:'#fd4c20',
        fontSize:16
    },
    nameStyle:{
        color:'gray',
        marginTop:8,

    },

});

module.exports = Detail;
