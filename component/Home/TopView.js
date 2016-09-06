/**
 * Created by xuanxuan on 16/9/2.
 */
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
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';


var {width} = Dimensions.get('window')
var TopListView = require('./TopListView')
var TopMenu = require('../../LocalData/TopMenu.json')
var TopView = React.createClass({
    getInitialState(){
      return {
          currentPage:0
      }
    },
    render() {
        return (
            <View style={styles.container}>
                {/*上部分内容部分*/}
                <ScrollView  horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                             onMomentumScrollEnd={(e)=>this.scrollEnd(e)}

                >
                    {this.renderScrollItem()}

                 </ScrollView>
                {/*下部分页码的指示*/}
                <View style={styles.indicatorBoxStyle}>
                    {this.renderIndicatorView()}

                </View>
            </View>
        );
    },
    //scrollView内部的组件
    renderScrollItem(){
        //组件数据
        var itemArray = [];
        var menurArr = TopMenu.data;
        for (var i = 0;i < menurArr.length;i++){
            itemArray.push(
                <TopListView key={i} dataArr = {menurArr[i]}></TopListView>
            )
        }
        return itemArray;
    },

    //指示器
    renderIndicatorView(){

        var indicatorArr= [];

        for(var i = 0; i < 2;i ++){
            css = i == this.state.currentPage ? {color:'#fd4b1f'}:{color:'#979797'}
            indicatorArr.push(<Text key={i} style={[styles.indicatorStyle,css]}>&bull;</Text>)
        }
        return indicatorArr;
    },


    //滚动结束调用的方法
    scrollEnd(e){
        var pageNum = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({currentPage:pageNum})
    }




})


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    indicatorBoxStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:width,

    },
    indicatorStyle:{
        fontSize:25,

    },

});

module.exports = TopView;
