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
    ListView,
    Image,
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window')


var TopListView = React.createClass({
    getDefaultProps(){
        return {
            dataArr:[],

        }
    },
    getInitialState(){
        return {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2}).cloneWithRows(this.props.dataArr)
        }
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentContainerStyle}
                scrollEnabled={false}

            >

            </ListView>
        );
    },

    componentDidMount(){


    },
    renderRow(rowData){

        return (<TouchableOpacity activeOpacity={0.5} onPress={()=>alert(0)} style={styles.cellStyle}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowData.image}} style={{width:52,height:52}}></Image>
                    <Text style={{fontSize:14}}>{rowData.title}</Text>
                </View>
        </TouchableOpacity>);


    }
})


const styles = StyleSheet.create({
    contentContainerStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width,
        justifyContent: 'space-around',

    },
    cellStyle:{

        width:70,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-start',
        marginTop:5,

    }

});

module.exports = TopListView;
