import React from 'react';
import {StyleSheet, View, Text } from 'react-native'
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

class MyChores extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chores: []
        }
    }
    componentDidMount(){
        axios.get('https://neighboring.today/api/chore').then(res => {
            this.setState({
                chores: res.data
            })
        })
    }

    render(){
        console.log(this.state)
        return(
            <View style={styles.container} >
                <Text>View</Text>
            </View>
        )
    }
}

export default MyChores