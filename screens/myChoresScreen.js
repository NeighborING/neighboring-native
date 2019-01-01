import React from 'react';
import {StyleSheet, View, Text } from 'react-native'
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

class MyChores extends React.Component{

    render(){
        return(
            <View style={styles.container} >
                <Text>View</Text>
            </View>
        )
    }
}

export default MyChores