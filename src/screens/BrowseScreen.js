import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';

import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    Body,
    Right
} from 'native-base';

import movieService from '../services/movie.service';


export default class BrowseScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Browse by Genre',

    }

    constructor(props) {
        super(props);

        this.state = {
            genreList: [],
            pageNum: 1,
        }

        this._getGenres();
    }

    render() {
        return (
            <Container>
                <List>
                    <FlatList
                        data={this.state.genreList}
                        renderItem={this._renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </List>
            </Container>
        );
    }


    _getGenres() {

        movieService.getGenreList()
            .then((results) => {

                this.setState(() => { return { genreList: results } })
            })
            .catch(error => {
                console.log('Error: couldn\'t retrieve GENRE query. BrowseScreen.js');
            });
    }


    _renderItem = ({ item }) => {
        return (
            <ListItem button
                onPress={() => {
                    this.props.navigation.navigate(
                        'Results', { searchType: 'genre', genreID: item.id, from: 'Browse' }
                    )
                }}
            >
                <Body>
                    <Text uppercase>{item.name}</Text>
                </Body>
                <Right>
                    <Text note>ID: {item.id}</Text>
                </Right>
            </ListItem>
        );
    }

}
