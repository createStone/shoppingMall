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
  Navigator
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/Home';
import More from '../More/More';
import Shop from '../Shop/Shop';
import Mine from '../Mine/Mine';

var Main = React.createClass({
    getInitialState()
    {
        return {
                 selectedTab:'home'
               }
    },
  render() {
    return (
        <TabNavigator>


            {this.renderTabbarItem("首页",'home','icon_tabbar_homepage','icon_tabbar_homepage_selected','home',Home)}
            {this.renderTabbarItem("商家",'shop','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop',Shop)}
            {this.renderTabbarItem("我的",'mine','icon_tabbar_mine','icon_tabbar_mine_selected','mine',Mine)}
            {this.renderTabbarItem("更多",'more','icon_tabbar_misc','icon_tabbar_misc_selected','more',More)}

        </TabNavigator>
    );
  },
    renderTabbarItem(title,selectedTabName,iconName,selectedIconName,componentName,component){

      return (<TabNavigator.Item
          title={title}
          renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={{uri:selectedIconName} } style={styles.iconStyle} />}
          selectedTitleStyle = {{color:'rgba(239,97,0,1)'}}
          onPress={() => this.setState({ selectedTab: selectedTabName})}
          selected={this.state.selectedTab === selectedTabName}>
          <Navigator

              initialRoute={{ title: componentName, component: component }}
              configureScene = {(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
              renderScene={(route, navigator) =>{
                  let Component = route.component;
                  return <Component {...route.passProps} navigator={navigator}/>

              }

              }

          />
      </TabNavigator.Item>)
    }
})


const styles = StyleSheet.create({
    iconStyle:{
        width:25,
        height:25
    },

});

module.exports = Main;
