import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

class header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()} >
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.navigation.state.routeName}</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}

export default header