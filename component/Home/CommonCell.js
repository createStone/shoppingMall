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

// {"title" : "天天特价", "subTitle" : "特惠不打烊", "rightImage" : "tttj", "titleColor": "orange"}
class  CommonCell extends  Component{



    render(){
        var {title,rightImage,subTitle,titleColor} = this.props;
        return (

            <TouchableOpacity activeOpacity={0.5}
                              onPress={()=>alert(title)  }
                              style={{flex: 1}}>
                        <View style={styles.cellContainer}>
                                <View>
                                    <Text style={[{color:titleColor},styles.titleStyle]}>{title}</Text>
                                    <Text style={styles.subtitle}>{subTitle}</Text>
                                </View>
                                <Image source={{uri:rightImage}} style={styles.image}></Image>

                    </View>

                </TouchableOpacity>);

    }
}

CommonCell.propTypes ={
    title:PropTypes.string,
    subTitle:PropTypes.string,
    rightImage:PropTypes.string,
    titleColor:PropTypes.string
}



const  styles = StyleSheet.create({

    cellContainer:{
        flex:1,
         flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        marginBottom:1.5


    },
    titleStyle:{
        fontSize:16,
        marginBottom:6,
        marginLeft:20,
        fontWeight:'bold'
    },
    subtitle:{
        fontSize:14,
        color:'gray',
        marginLeft:20

    },image:{
        width:80,
        height:40,
        marginRight:4,
        resizeMode:'contain',


    }

})


module.exports = CommonCell;