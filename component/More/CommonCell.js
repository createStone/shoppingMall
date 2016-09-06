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
    Switch,
    PixelRatio
} from 'react-native';


var minWidth = 1 /PixelRatio.get()

var CommonCell = React.createClass({
    getDefaultProps(){
        return {
            title:'',
            press:()=>{},
            isSwitch:false,
            rightTitle:''
        }
    },
    getInitialState(){
      return {
          isOn:false
      }
    },
    render() {
        return (
        <TouchableOpacity activeOpacity={0.5}
                          onPress={()=>{this.press()}}
        >
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.title}
                </Text>
                {this.renderRightView()}

            </View>
            </TouchableOpacity>
        );
    },
    press(){
        this.props.press()
    },
    renderRightView(){
        if (this.props.isSwitch){
            return <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn}); this.props.press()}}></Switch>
        }
        return (
            <View style={{flexDirection:'row'}}>
                {this.showRightTitleView()}
              <Image source={{uri:'icon_cell_rightArrow'}} style={styles.imageStyle} />
            </View>
        );
    },
    showRightTitleView(){
        if (this.props.rightTitle.length > 0 ){
            return <Text style={{marginRight:5}}>{this.props.rightTitle}</Text>
        }
    }
})


const styles = StyleSheet.create({
    container:{
        height:44,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10,
        borderBottomColor:'#ddd',
        borderBottomWidth:minWidth,
    },
    imageStyle:{
        width:8,
        height:13,

    }
});

module.exports = CommonCell;
