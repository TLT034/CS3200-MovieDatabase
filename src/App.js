/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import SearchScreen from './screens/SearchScreen';
import BrowseScreen from './screens/BrowseScreen';
import ResultsScreen from './screens/ResultsScreen';
import DetailScreen from './screens/DetailScreen';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <AppContainer />
        );
    }
}

const BrowseStack = createStackNavigator(
    {
        Browse: {
            screen: BrowseScreen,

            navigationOptions: ({ navigation }) => ({
                headerBackTitleVisible: true,
                headerTitle: 'Results',
                headerBackTitle: 'Browse'
            }) 
        },
        Results: {
            screen: ResultsScreen,

            navigationOptions: ({ navigation }) => ({
                headerBackTitleVisible: true,
                headerTitle: 'Results',
                headerBackTitle: 'Results'
            }) 
        },
        Details: DetailScreen
    },
);

const SearchStack = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,

            navigationOptions: ({ navigation }) => ({
                headerBackTitleVisible: true,
                headerTitle: 'Results',
                headerBackTitle: 'Browse'
            })
        },
        Results: {
            screen: ResultsScreen,

            navigationOptions: ({ navigation }) => ({
                headerBackTitleVisible: true,
                headerTitle: 'Results',
                headerBackTitle: 'Results'
            })
        },
        Details: DetailScreen
    }
);

const AppContainer = createAppContainer(createBottomTabNavigator(
    {
        Search: SearchStack,
        Browse: BrowseStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = MaterialIcons;
                let iconName;
                if (routeName === 'Search') {
                    iconName = 'search';
                } else if (routeName === 'Browse') {
                    iconName = 'menu'
                }

                return <IconComponent name={iconName} size={25} color={tintColor} />;
            }
        }),
        
    }
));