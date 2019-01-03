import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Header from '../src/components/header'
import { Icon } from 'native-base'

export default class HomeScreen extends Component{

    static navigationOptions = {
        drawerIcon : ({tintColor}) => {
            <Icon name="home" style={{fontSize: 21}}/>
        }
    }

    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} />
                <View style={{flex:1, alignItems:'center'}} >
                    <Text>Home</Text>
                </View>
            </View>
        )
    }
}