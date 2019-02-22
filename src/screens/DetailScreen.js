import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    ActivityIndicator
} from 'react-native';

import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text
} from 'native-base';

import movieService from '../services/movie.service';
import MovieDetail from '../components/MovieDetail';
import PersonDetail from '../components/PersonDetail';


export default class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Details'
    }

    constructor(props) {
        super(props);
        const { navigation } = this.props;

        this.data = navigation.getParam('data', 'NO DATA');
        this.itemType = navigation.getParam('itemType', 'movie');
        this.credits = navigation.getParam('credits', 'N/A');
        this.cast = navigation.getParam('cast', 'N/A');

    }


    render() {
        return (
            <View>{this.renderDetails()}</View>
        );
    }


    renderDetails() {
        if (this.itemType == 'person') {
            return (<PersonDetail data={this.data} credits={this.credits} />);
        }
        else {
            return (<MovieDetail data={this.data} cast={this.cast} />);
        }
    };

}