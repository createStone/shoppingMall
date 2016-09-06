/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component ,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

var {width} = Dimensions.get('window')
var data = require('../../LocalData/HomeTopMiddleLeft.json')

var CommonCell = require('./CommonCell');
var MiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                 {/*左边的View*/}
                {this.renderLeft()}
                 {/*右边的View*/}
                {this.renderRight()}

            </View>
        );
    },

    renderLeft(){
        var dataLeft = data.dataLeft;


        // {
        //     "dataLeft":[
        //     {"img1" : "mdqg", "img2" : "yyms", "title" : "探路组碳烤鱼", "price": "¥9.5", "sale": "再减3元"}
        // ],
        //     "dataRight":[
        //     {"title" : "天天特价", "subTitle" : "特惠不打烊", "rightImage" : "tttj", "titleColor": "orange"},
        //     {"title" : "一元吃", "subTitle" : "一元吃美食", "rightImage" : "yyms", "titleColor": "red"}
        // ]
        // }

       return (<MiddleLeftView
                    img1={dataLeft[0].img1}
                    img2={dataLeft[0].img2}
                    title={dataLeft[0].title}
                    price={dataLeft[0].price}
                    sale = {dataLeft[0].sale}
       ></MiddleLeftView>) ;

    },



    renderRight(){

        var dataLeft = data.dataRight;

        return ( <MiddleRightView data={dataLeft}></MiddleRightView>);
    }


})



class  MiddleLeftView extends  Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        var {img1,img2,title,price,sale} = this.props;

        return (    <TouchableOpacity activeOpacity={0.5} onPress={()=>alert('0')} style={{flex:1}}>
                        <View style={styles.leftViewContainer}>
                            <Image source={{uri:img1}} style={styles.img1Style}></Image>
                            <Image source={{uri:img2}} style={styles.img2Style}></Image>
                            <Text style={styles.titleStyle}>{title}</Text>
                            <View style={{flexDirection:"row",marginBottom:10,alignItems:'center'}}>
                                 <Text style={styles.priceStyle}>{price}</Text>
                                    <Text style={styles.saleStyle}>{sale}</Text>
                             </View>
                        </View>
                 </TouchableOpacity>);

    }
}

MiddleLeftView.propTypes ={
    img1:PropTypes.string.isRequired,
    img2:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    sale:PropTypes.string.isRequired

}





class  MiddleRightView extends  Component{

    render(){

        return (<View style={styles.rightViewContainer}>
                        {this.renderItems()}
                 </View>);
    }

    renderItems(){
        var data = this.props.data;

        var arr = [];
        for (var i = 0; i < data.length;i++){
            var item = data[i];

            arr.push(<CommonCell key={i} {...item}/>)
        }
        return arr;
    }
}

MiddleRightView.propTypes ={
        data:PropTypes.array.isRequired
}






const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        marginTop:10
    },
    leftViewContainer:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        marginRight:1,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
    rightViewContainer:{

        flex:1,

    },
    img1Style:{
        width:78,
        height:25,
        marginTop:4
    },
    img2Style:{
        width:64,
        height:42
    },
    titleStyle:{
        color:'gray',
        fontSize:16,
        marginTop:4,
        marginBottom:4
    },
    priceStyle:{
        color:'#21c02f'
    },
    saleStyle:{
        backgroundColor:'yellow',
        color:'red',
        marginLeft:4,
        padding:2
    }
});

module.exports = MiddleView;
