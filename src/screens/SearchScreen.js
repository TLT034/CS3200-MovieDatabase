import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Picker,
    Icon
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import styles from '../style/styles';



export default class SearchScreen extends Component {
    static navigationOptions = {
        headerLayoutPreset: 'center',

        title: 'Movie Mania'
    }

    constructor(props) {
        super(props);

        this.state = {
            searchStr: '',
            searchType: 'movie',
            placeholder: 'Movie Title'
        }
    }

    render() {
        return (
            <View style={styles.searchContainer}>
                <Text style={styles.searchDescripton}>
                    Search for Movies or People
                </Text>
                <View style={styles.searchBar}>
                    <Text style={styles.pickerText}>{this.state.searchType == 'movie' ? 'Movie Search' : 'Person Search' }</Text>
                    <Picker
                        style={styles.pickerArrow}
                        selectedValue={this.state.searchType}
                        onValueChange={(itemValue, itemIndex) => {
                            let nextPlaceholder = 'Person Name';
                            if (itemValue == 'movie') {
                                nextPlaceholder = 'Movie Title';
                            }
                            this.setState(() => { return { searchType: itemValue, placeholder: nextPlaceholder } });
                        }}>
                        <Picker.Item label="Movie Search" value="movie" />
                        <Picker.Item label="Person Search" value="person" />
                    </Picker>
                    <TextInput
                        ref={'textInput'}
                        style={styles.searchInput}
                        placeholder={this.state.placeholder}
                        returnKeyType={'search'}
                        value={this.state.searchStr}
                        onChangeText={(text) => {
                            this.setState(() => { return { searchStr: text } });
                        }}
                        onSubmitEditing={(value) => {
                            this._submitSearch();
                            this.setState(() => { return { searchStr: '' } });
                        }}
                    />
                </View>
            </View>
        );
    }

    _submitSearch() {

        this.props.navigation.navigate('Results', {
            searchString: this.state.searchStr,
            searchType: this.state.searchType,
            from: 'Search'
        })
    }
}
