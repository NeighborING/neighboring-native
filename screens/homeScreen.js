import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Header from '../src/components/header'

export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} />
                <Text>Home</Text>
            </View>
        )
    }
}