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
    Platform,
    Dimensions,
    PixelRatio,
    ScrollView
} from 'react-native';

var {width} = Dimensions.get('window');
var minWidth  = 1/ PixelRatio.get();
var isIos = Platform.OS === 'ios';

var MineCell = require('./MineCell')
var Mine = React.createClass({
    render() {
        return (
            <ScrollView style={styles.container}
                contentInset={{top:-200}}
                contentOffset={{y:200}}
            >
                {this.renderHeaderView()}
                <View>
                    <View style={{marginBottom:10}}>
                        <MineCell icon={'collect'} title="我的订单"  rightTitle={'查看全部订单'}></MineCell>
                        {this.renderInnerItem()}
                    </View>
                    <View style={{marginBottom:10}}>
                        <MineCell icon={'draft'} title="美团钱包"  rightTitle={'账户余额:¥100'}></MineCell>
                        <MineCell icon={'like'} title="抵用券"  rightTitle={'0'}></MineCell>
                    </View>
                    <View style={{marginBottom:10}}>
                        <MineCell icon={'card'} title="积分商城"></MineCell>
                    </View>
                    <View style={{marginBottom:10}}>
                        <MineCell icon={'new_friend'} title="今日推荐" rightIcon={'me_new'}></MineCell>
                    </View>
                    <View style={{marginBottom:10}}>
                        <MineCell icon={'pay'} title="我要合作"  rightTitle={'轻松开店,招财进宝'}></MineCell>
                    </View>
                </View>

            </ScrollView>
        );
    },

    renderHeaderView(){
        return (<View style={styles.headerViewStyle}>

                    {/*头部中部*/}
                    <View style={styles.headerCenterViewStyle}>
                       <View style={styles.headerCenterLeftViewStyle}>
                           <Image source={{uri:'see'}} style={styles.iconStyle}/>
                           <Text style={{color:'white'}}>美团电商</Text>
                           <Image source={{uri:'avatar_vip'}} style={styles.vipStyle}></Image>
                       </View>
                        <Image source={{uri:'icon_cell_rightArrow'}} style={styles.arrowStyle}></Image>
                    </View>

                     {/*头部底部*/}
                     <View style={styles.headerBottomView}>

                            {this.renderHeaderBottomView()}
                    </View>

        </View>);
    },
    renderHeaderBottomView(){
        var itemArray = [];
        var data = [{title:'美团券',num:100},{title:'评价',num:'12'},{title:'收藏',num:50}]
        for(var i = 0;i < data.length;i++){
            var item  = data[i];
            var css = [];
            css.push(styles.innerViewStyle)
            if (i < data.length -1){
                css.push({borderRightWidth:minWidth, borderRightColor:'white'})
            }
            itemArray.push( <TouchableOpacity key={i} activeOpacity={0.5} style={styles.itemViewStyle} >
                                <View  style={css}>
                                    <Text style={{color:'white'}}>{item.num}</Text>
                                    <Text style={{color:'white'}}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>);

        }
        return itemArray;
    },
    renderInnerItem(){
        return (
            <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'white'}}>
                <InnerItem name={'代付款'} icon={'order1'}></InnerItem>
                <InnerItem name={'待使用'} icon={'order2'}></InnerItem>
                <InnerItem name={'待评价'} icon={'order3'}></InnerItem>
                <InnerItem name={'退款/售后'} icon={'order4'}></InnerItem>

            </View>

        );
    }
})


var InnerItem = React.createClass({
    getDefaultProps(){
        return {
            name:'',
            icon:''
        }
    },
    render(){
        return (<TouchableOpacity activeOpacity={0.5} style={{marginBottom:5,marginTop:5}} >
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:this.props.icon}} style={{width:44,height:32}}></Image>
                    <Text>{this.props.name}</Text>
                </View>
        </TouchableOpacity>)
    }
})



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8'
    },
    headerViewStyle:{
        height:isIos ? 350:140,
        width:width,
        backgroundColor:'#fb4d1f',

    },
    headerCenterViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:isIos ? 240:30
    },
    headerCenterLeftViewStyle:{
        flexDirection:'row',
        alignItems:'center',

    },
    iconStyle:{
        width:65,
        height:65,
        borderRadius:33,
        borderWidth:5,
        borderColor:'#f68366',
        marginLeft:10,
        marginRight:5
    },
    vipStyle:{
        width:17,
        height:17,

    },
    arrowStyle:{
        width:8,
        height:13,
        marginRight:10
    },
    headerBottomView:{
        width:width,
        height:40,
        backgroundColor:'rgba(255,255,255,0.3)',
        position:'absolute',
        bottom:0,
        flexDirection:'row'
    },
    itemViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    innerViewStyle:{

        alignSelf:'stretch',
        alignItems:'center',



    }
});

module.exports = Mine;
