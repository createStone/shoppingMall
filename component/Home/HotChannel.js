/**
 * Created by xuanxuan on 16/9/5.
 */
/**
 * Created by xuanxuan on 16/9/4.
 */

import React, { Component ,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView,
} from 'react-native';


var MineCell= require('../Mine/MineCell')

var hotData = require('../../LocalData/XMG_Home_D6.json')

class  HotChannel extends  Component{

    render(){
        var {title,rightImage,subTitle,titleColor} = this.props;
        return (
            <View style={styles.container}>
                {this.renderTop()}
                {this.renderMiddle()}
                {this.renderBottom()}
            </View>
            );

    }

    renderTop(){

        return (  <MineCell title={'热门频道'} icon={'rm'} rightTitle={'查看全部'}
            ></MineCell>
        );
    }

    renderMiddle(){

        var dataArr =  hotData.data[0].resource.cateArea;


        return (<View style={{flexDirection:'row',justifyContent:'center',paddingTop:7,paddingLeft:5,paddingRight:5}}>
            <MiddleComponent {...dataArr[0]}></MiddleComponent>
            <MiddleComponent {...dataArr[1]}></MiddleComponent>
        </View>)
    }

    renderBottom(){
        var dataArr =  hotData.data[0].resource.cateArea;
        return (<View style={styles.bottomContainer}>

                <BottomComponent {...dataArr[2]}></BottomComponent>
                <BottomComponent {...dataArr[3]}></BottomComponent>
                <BottomComponent {...dataArr[4]}></BottomComponent>
                <BottomComponent {...dataArr[5]}></BottomComponent>

        </View>)
    }

}

HotChannel.propTypes ={

}



class  MiddleComponent extends  Component{
    render(){
        var {mainTitle,deputyTitle,otherDesc,entranceImgUrl} = this.props;


        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(mainTitle)}} style={{flex:1}}>
                <View style={styles.middleComponentContainer}>
                    <View style={styles.leftStyle}>
                        <Text style={styles.mainTitle}>{mainTitle}</Text>
                        <Text style={styles.deputyTitle}>{deputyTitle}</Text>
                        <Text style={styles.otherDesc}>{otherDesc}</Text>
                    </View>
                    <Image source={{uri:entranceImgUrl}} style={styles.image}></Image>
                </View>
            </TouchableOpacity>
        );

    }


}

// "status": 1,
//     "data": [
//     {
//         "entryid": 10001,
//         "resource": {
//             "cateArea": [
//                 {
//                     "id": 178,
//                     "type": 1,
//                     "mainTitle": "演出赛事",
//                     "deputyTitle": "精彩不容错过",
//                     "otherDesc": "HOT",
//                     "topicId": 8761,
//                     "entranceImgUrl": "http://p1.meituan.net/feop/f1f9d10251a05bfcbcbb5b7e647f24e022686.png",
//                     "target": "imeituan://www.meituan.com/web?url=http://show.meituan.com"

MiddleComponent.propTypes ={
    mainTitle:PropTypes.string,
    deputyTitle:PropTypes.string,
    otherDesc:PropTypes.string,
    entranceImgUrl:PropTypes.string

}



class  BottomComponent extends  Component{
    render(){
        var {mainTitle,deputyTitle,otherDesc,entranceImgUrl} = this.props;


        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(mainTitle)}} style={{flex:1}}>
                <View style={styles.bottomComponentContainer}>
                    <Text style={styles.mainTitle}>{mainTitle}</Text>
                    <Text style={styles.deputyTitle}>{deputyTitle}</Text>
                    <Image source={{uri:entranceImgUrl}} style={styles.image}></Image>
                </View>
            </TouchableOpacity>
        );

    }


}

// "status": 1,
//     "data": [
//     {
//         "entryid": 10001,
//         "resource": {
//             "cateArea": [
//                 {
//                     "id": 178,
//                     "type": 1,
//                     "mainTitle": "演出赛事",
//                     "deputyTitle": "精彩不容错过",
//                     "otherDesc": "HOT",
//                     "topicId": 8761,
//                     "entranceImgUrl": "http://p1.meituan.net/feop/f1f9d10251a05bfcbcbb5b7e647f24e022686.png",
//                     "target": "imeituan://www.meituan.com/web?url=http://show.meituan.com"

BottomComponent.propTypes ={
    mainTitle:PropTypes.string,
    deputyTitle:PropTypes.string,
    otherDesc:PropTypes.string,
    entranceImgUrl:PropTypes.string

}







const  styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
        marginTop:10
    },
    middleComponentContainer:{
        flexDirection:'row',
        backgroundColor:'#f8f8f8',
        marginRight:4,
        alignItems:'center',
        height:100

    },
    leftStyle:{
        marginLeft:5,
        marginTop:10,
    },
    mainTitle:{
        color:'#969797',
        fontWeight:'bold',
        margin:5,
    },
    deputyTitle:{
        color:'gray',
        margin:5,
        fontSize:12
    },
    otherDesc:{
        margin:5,
        color:'white',
        backgroundColor:'#ec5330',
        padding:5,
        borderRadius:10,
        width:40

    },
    image:{
        width:80,
        height:70
    },
    bottomContainer:{
        flexDirection:'row',
      backgroundColor:'white',

        margin:5

    },
    bottomComponentContainer:{
        flex:1,
        marginRight:4,
        backgroundColor:'#f8f8f8',
        alignItems:'center'
    }

})


module.exports = HotChannel;