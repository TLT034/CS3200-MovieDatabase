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
import MovieSummary from '../components/MovieSummary';
import PersonSummary from '../components/PersonSummary';


export default class ResultsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerBackTitleVisible: true,
            headerTitle: 'Results',
            headerBackTitle: navigation.getParam('from', 'Back')
        };

    }

    constructor(props) {
        super(props);
        const { navigation } = this.props;

        this.searchString = navigation.getParam('searchString', 'null');
        this.searchType = navigation.getParam('searchType', 'movie');
        this.genreID = navigation.getParam('genreID', 0);


        this.state = {
            pageNum: 1,
            data: [],
            loadedAllContent: false,
            loading: false,
            credits: [],
            cast: []
        }

    }

    componentDidMount() {
        this.getContent();
    }


    render() {
        return (
            <Container>
                <List>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                        keyExtractor={item => item.getID().toString()}
                        onEndReachedThreshold={0.1}
                        onEndReached={this._loadMore}
                        ListFooterComponent={this._renderFooter}
                    />
                </List>
            </Container>
            );
    }
    
    
    _renderItem = ({ item }) => {
        if (this.searchType == 'person') {
            return (<PersonSummary data={item} pressed={() => { this.getDetails('person', item.getID()) }} />);
        }
        else {
            return (<MovieSummary data={item} pressed={() => { this.getDetails('movie', item.getID()) }} />);
        }
    };


    _loadMore = () => {
        if (this.state.loadedAllContent) {
            console.log('All Content Loaded');
            return;
        }
        this.setState({
            pageNum: this.state.pageNum + 1,
        }, () => {
            this.getContent();
        });
    };


    _renderFooter = () => {
        if (!this.state.loading) {
            return null;
        }
        return (
            <View style={{ paddingVertical: 25 }}>
                <ActivityIndicator animating size={'large'} />
            </View>
        );
    }



    getContent() {

        //console.log(this.state.pageNum);
        this.setState({ loading: true });

        if (this.searchType == 'movie') {

            movieService.searchMovies(this.state.pageNum, this.searchString)
                .then((results) => {
                    if (results === undefined || results.length == 0) {
                        this.setState({ loadedAllContent: true, loading: false });
                        return;
                    }
                    this.setState({
                        data: [...this.state.data, ...results],
                        loading: false
                    });
                })
                .catch(error => {
                    console.log('Error: couldn\'t retrieve MOVIE search query. ResultsScreen.js');
                });
        }
        else if (this.searchType == 'person') {

            movieService.searchPeople(this.state.pageNum, this.searchString)
                .then((results) => {
                    if (results === undefined || results.length == 0) {
                        this.setState({ loadedAllContent: true, loading: false  });
                        return;
                    }
                    this.setState({
                        data: [...this.state.data, ...results],
                        loading: false
                    });
                })
                .catch(error => {
                    console.log('Error: couldn\'t retrieve PERSON search query. ResultsScreen.js');
                });
        }
        else if (this.searchType == 'genre') {

            movieService.getMoviesByGenre(this.state.pageNum, this.genreID)
                .then((results) => {
                    if (results === undefined || results.length == 0) {
                        this.setState({ loadedAllContent: true, loading: false  });
                        return;
                    }
                    this.setState({
                        data: [...this.state.data, ...results],
                        loading: false
                    });
                })
                .catch(error => {
                    console.log('Error: couldn\'t retrieve MOVIE search by GENRE query. ResultsScreen.js');
                });
        }
    }


    getDetails(detailsType, itemID) {
        if (detailsType == 'movie') {
            movieService.getMovieCast(itemID)
                .then((results) => {
                    this.setState({ cast: results }, () => { this.goToDetails(detailsType, itemID) });
                })
                .catch(error => {
                    console.error('Error: couldn\'t retrieve Movie CAST. ResultsScreen.js');
                });
        }
        else {
            movieService.getMovieCredits(itemID)
                .then((results) => {
                    this.setState({ credits: results }, () => { this.goToDetails(detailsType, itemID) });
                })
                .catch(error => {
                    console.error('Error: couldn\'t retrieve Person CREDITS. ResultsScreen.js');
                });
        }
    }

    goToDetails(detailsType, itemID) {
        if (detailsType == 'movie') {

            movieService.getMovieDetails(itemID)
                .then((results) => {
                    this.props.navigation.navigate('Details', { data: results, itemType: 'movie', cast: this.state.cast });
                })
                .catch(error => {
                    console.error('Error: couldn\'t retrieve MOVIE DETAILS. ResultsScreen.js');
                });
        }
        else {

            movieService.getPersonDetails(itemID)
                .then((results) => {
                    this.props.navigation.navigate('Details', { data: results, itemType: 'person', credits: this.state.credits });
                })
                .catch(error => {
                    console.error('Error: couldn\'t retrieve PERSON DETAILS. ResultsScreen.js');
                });
        }
    }
}