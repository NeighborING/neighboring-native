import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

class header extends Component {
    constructor(props){
        super(props)
    }
    render() {

        console.log(this.props)

        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()} >
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}

export default header