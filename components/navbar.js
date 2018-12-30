import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
})

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        return(
            <View style={styles.navbar} >
                <Text>Home</Text>
                <Text>Create</Text>
                <Text>View</Text>
                <Text>Account</Text>
            </View>
        )
    }
}


export default Navbar