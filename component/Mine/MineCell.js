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
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';




var CommonCell = React.createClass({
    getDefaultProps(){
        return {
            title:'',
            press:()=>{},
            icon:'',
            rightTitle:'',
            rightIcon:''
        }
    },
    render() {


        var {title,press,icon,rightTitle} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={()=>{press()}}
            >
                <View style={styles.container}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={{uri:icon}} style={styles.iconStyle}></Image>
                        <Text>  {title} </Text>
                    </View>

                    {this.renderRightView()}

                </View>
            </TouchableOpacity>
        );
    },

    renderRightView(){
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.showRightTitleView()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={styles.imageStyle} />
            </View>
        );
    },
    showRightTitleView(){
        if (this.props.rightTitle.length > 0){
            return <Text style={{marginRight:5}}>{this.props.rightTitle}</Text>
        }else{
            if(this.props.rightIcon.length > 0){
                return <Image source={{uri:this.props.rightIcon}} style={{width:24,height:13}}></Image>
            }

        }
    }
})


const styles = StyleSheet.create({
    container:{
        height:44,

        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10,
        borderBottomColor:'#ddd',
        borderBottomWidth:0.5
    },
    iconStyle:{
        width:27,
        height:27,
        borderRadius:14,
    },
    imageStyle:{
        width:8,
        height:13,

    }
});

module.exports = CommonCell;
