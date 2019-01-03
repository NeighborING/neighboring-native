import React from 'react';
import {StyleSheet, View, Text } from 'react-native'
import Header from '../src/components/header'
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

class MyChores extends React.Component{

    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} />
                <View style={styles.container} >
                    <Text>View</Text>    
                </View>
                
            </View>
        )
    }
}

export default MyChores