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
    ScrollView
} from 'react-native';


var {width} = Dimensions.get('window')

var shopCenterData = require('../../LocalData/XMG_Home_D5.json')

var MineCell = require('../Mine/MineCell')


class  ShoppingCenter extends  Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return (<View style={styles.container}>
            {this.renderTop()}
            <ScrollView showsHorizontalScrollIndicator={false}
                        horizontal={true}
            >
                {this.renderBottom()}
            </ScrollView>



        </View>);
    }

    renderTop(){

        return (<MineCell icon={'gwzx'} title={'购物中心'} rightTitle ={ `全部${shopCenterData.count}家`} >


        </MineCell>);

    }

    renderBottom(){

        // {
        //     "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/4374715",
        //     "promotionIcon": "",
        //     "name": "正佳广场",
        //     "img": "http://p0.meituan.net/codeman/b4686ddc7270363868fcff917d3526cd37899.jpg",
        //     "showtext": {
        //     "text": "离我最近",
        //         "count": 84,
        //         "color": ""
        // },
        //     "longitude": 113.327086,
        //     "latitude": 23.131909,
        //     "smid": 4374715,
        //     "promotionText": "送福利 商品低至1.5折"
        // },


        var items = [];
        var data = shopCenterData.data;

        var i = 0;
        for (var i = 0 ; i < data.length;i++ ){
            var itemData = data[i];

            items.push(
                <ShoppingCenterItem key={i} title={itemData.name} icon={itemData.img} text={itemData.showtext.text}></ShoppingCenterItem>
            )


        }
        return items
    }

}

ShoppingCenter.propTypes ={

}




class  ShoppingCenterItem extends  Component{

    constructor(props){
        super(props);
    }

    render(){

        var {icon,text,title} = this.props;
        return (<TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(title)}}>
             <View style={styles.containerView}>
                 <Image source={{uri:icon}} style={styles.imageStyle}></Image>
                 <Text style={styles.textStyle}>{text}</Text>
                 <Text style={styles.nameStyle}>{title}</Text>
             </View>
         </TouchableOpacity>);
    }



}


ShoppingCenterItem.propTypes = {
    icon:PropTypes.string,
    text:PropTypes.string,
    title:PropTypes.string


}




const  styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:'white'
    },
    containerView:{
        margin:10,
    },
    imageStyle:{
        width:102,
        height:74,
        borderRadius:10,
    },
    nameStyle:{

    },
    textStyle:{
        position:'absolute',
        left:0,
        top:40,
        color:'white',
        backgroundColor:'#ffa500',
        padding:4,
        borderTopRightRadius:2,
        borderBottomRightRadius:2

    }

})



module.exports = ShoppingCenter;