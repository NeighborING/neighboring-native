import React from 'react';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base'
import Header from '../src/components/header'
import axios from 'axios';

class OpenChores extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            chores: []
        }
    }

    componentDidMount = () => {
        axios.get('https://neighboring.today/api/chore/incomplete').then( res => {
            this.setState({
                chores: res.data
            })
        })
    }

    render(){

        console.log(this.state)

        let chores = <Text>Sorry! No chores here yet!</Text>

        chores = this.state.chores.map( (item, index) => {
            return(
                <Card key={index} >
                    <CardItem header>
                        <Text>{item.title}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{item.description}</Text>
                        </Body>
                    </CardItem>
                    
                </Card>
            )
        })

        return(
            <Container>
                <Header navigation={this.props.navigation} />

                <Content>
                    {chores}
                    
                </Content>

            </Container>
        )
    }
}

export default OpenChores