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


var {width} = Dimensions.get('window')
class  CommonTop extends  Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return (<View style={styles.container}>
            {this.renderTop()}
            {this.renderBottom()}
        </View>);
    }

    handlerUrl(url){
        if (url.search('w.h') == -1){
            return url;
        }

        return url.replace('w.h','120.90')
    }
}

CommonTop.propTypes ={

}


const  styles = StyleSheet.create({
    container:{
        marginTop:10
    },

})



module.exports = CommonTop;