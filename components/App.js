import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Home from './home';
import MyChores from './myChores';
import Navbar from './navbar'


const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	main: {
		flex: 15,
		backgroundColor: 'blue'
	},

	footer: {
		flex: 1,
		backgroundColor: 'orange'
	}
})


const nav = createBottomTabNavigator({
	Home: Home,
	MyChores: MyChores
}, {
	tabBarOptions: {
		activeTintColor: 'orange',
		labelStyle: {
			fontSize: 20
		}
	}
})

export default createAppContainer(nav)
