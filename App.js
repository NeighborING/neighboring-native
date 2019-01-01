import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, Image } from "react-native";
import { Drawer, Container, Content } from 'native-base'

import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers';
import promise from './src/middleware/promise';

import HomeScreen from './screens/homeScreen'
import MyChoresScreen from './screens/myChoresScreen'




const store = createStore( rootReducer, {}, applyMiddleware(promise));



const sidebar = props => (
	<SafeAreaView style={{flex: 1}} >
		<View style={{ height: 120 , alignItems: 'center', justifyContent: 'center'}}>
			<Image source={require('./assets/images/logo.png')} style={{ height: 120, width: 120}} resizeMode="contain" />
		</View>

		<ScrollView>
			<DrawerItems {...props} />
		</ScrollView>

	</SafeAreaView>
)

const AppDrawerNavigator =  createAppContainer(createDrawerNavigator({
	Home: HomeScreen,
	MyChores: MyChoresScreen
}, {
	contentComponent: sidebar
}))


class App extends Component {
    render() {
      	return (
        	<Provider store={store}>
				
				<AppDrawerNavigator/>

        	</Provider>
      	);
    }
}


export default App