/**
 * Created by xuanxuan on 16/9/5.
 */


import React, { Component ,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

var CommonCell = require('./CommonCell')
var TopData = require('../../LocalData/HomeTopMiddle.json')
var hotData = require('../../LocalData/XMG_Home_D4.json')
var {width} = Dimensions.get('window')
class  BottomMiddleView extends  Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return (<View style={styles.container}>
            {this.renderTop()}
            <View style={styles.bottomStyle}>
                {this.renderBottom()}
            </View>
        </View>);
    }

    //渲染顶部
    renderTop(){

        var data = TopData.data[0]
        return (
            <View style={styles.topView}>
                <CommonCell {...data} rightImage={data.image} titleColor={'#fb7f66'}></CommonCell>
            </View>
        );
    }

    //渲染底部
    renderBottom(){

        // {
        //     "stid": "720698155324449024",
        //     "data": [{
        //     "position": 0,
        //     "typeface_color": "#ff9900",
        //     "id": 7486,
        //     "share": {
        //         "message": "1元能吃肯德基",
        //         "url": "http://i.meituan.com/firework/kfchanbao"
        //     },
        //     "title": "1元能吃肯德基",
        //     "module": false,
        //     "maintitle": "1元肯德基",
        //     "tplurl": "imeituan://www.meituan.com/web?url=http://i.meituan.com/firework/kfchanbao",
        //     "type": 1,
        //     "imageurl": "http://p0.meituan.net/w.h/groupop/9aa35eed64db45aa33f9e74726c59d938450.png",
        //     "solds": 0,
        //     "deputytitle": "新用户专享"
        // },

            var data = hotData.data;
            var items = [] ;

        for (var i = 0 ; i < data.length; i ++){
            var itemData = data[i];
            items.push(

                <View key={i} style={styles.bottomItemStyle}>
                      <CommonCell  title = {itemData.maintitle}
                                    subTitle={itemData.deputytitle}
                                    rightImage={this.handlerUrl(itemData.imageurl)}
                                    titleColor={itemData.typeface_color}
                        ></CommonCell>
                </View>);
        }

        return items;

    }


    handlerUrl(url){
        if (url.search('w.h') == -1){
            return url;
        }

        return url.replace('w.h','120.90')
    }


}

BottomMiddleView.propTypes ={

}


const  styles = StyleSheet.create({
    container:{
        marginTop:10


    },
    topView:{
        height:60,
    },
    bottomStyle:{
        flexWrap:'wrap',
        flexDirection:'row'

    },
    bottomItemStyle:{
        width:width / 2,
        height:57,
        borderRightColor:'#e8e8e8',
        borderRightWidth:1,

    }
})



module.exports = BottomMiddleView;