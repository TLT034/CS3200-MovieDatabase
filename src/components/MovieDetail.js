import React, { Component } from 'react';

import { ScrollView, View, Image, StyleSheet} from 'react-native';

import {
    List,
    ListItem,
    Text,
    Left,
    Right,
    Body,
    Thumbnail,
    Card,
    CardItem,
    Accordion
} from 'native-base';


export default class MovieDetail extends Component {
    constructor(props) {
        super(props);

        this.image = this.props.data.getImagePath();
        this.title = this.props.data.getTitle();
        this.popularity = this.props.data.getPopularity();
        this.releaseDate = this.props.data.getReleaseDate();
        this.overview = this.props.data.getFullOverview();
        this.genres = this.props.data.getGenres();
        this.budget = this.props.data.getBudget();
        this.revenue = this.props.data.getRevenue();
        this.status = this.props.data.getStatus();

        this.cast = this.props.cast;
    }


    render() {
        const overview = [{ title: 'Overview', content: this.overview }];

        return (
            <ScrollView>
                <Card>
                    <CardItem>
                        <Left>
                            <Image style={{ width: 92, height: 138}} source={{ uri: this.image }} />
                        </Left>
                        <Body>
                            <Text style={styles.Title}>{this.title}</Text>
                            <Text note>Status:   {this.status}</Text>
                            <Text note>Release Date:  {this.releaseDate}</Text>
                            <Text note>Popularity:   {this.popularity}</Text>
                            <Text note>Budget:   ${this.budget}</Text>
                            <Text note>Revenue:   ${this.revenue}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Accordion style={{ width: '100%' }} dataArray={overview} />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>Genres</Text>
                        </Left>
                        <Right>
                            {this.displayGenres()}
                        </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Text>Cast</Text>
                    </CardItem>
                    <CardItem>
                        {this.renderCast()}
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }


    displayGenres() {
        let genreList = [];
        this.genres.forEach(element => {
            genreList.push(<Text key={element.id}>{element.name}</Text>);
        });

        return (<View>{genreList}</View>);
    }


    renderCast() {
        let castList = [];

        this.cast.forEach(element => {
            castList.push(
                <View
                    style={{ marginHorizontal: 3, width: 92 }}
                    key={element.getImagePath() + " " + element.getName()}>
                    <Image
                        style={{ width: 92, height: 138, borderWidth: 1, borderColor: 'black' }}
                        source={{ uri: element.getImagePath() }} />
                    <Text style={{ textAlign: 'center' }} >{element.getName()}</Text>
                    <Text style={{ textAlign: 'center' }} note>{element.getCharacter()}</Text>
                </View>
            );
        })

        return (<ScrollView style={{ flexDirection: 'row' }} horizontal={true}>{castList}</ScrollView>);
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    container2: {
        flexDirection: 'column',
        padding: 10,
        //marginRight: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    homeScreenButton: {
        alignSelf: 'center',
        marginVertical: 25,
        width: '98%',
        height: 75
    },
    homeScreenButtonTop: {
        alignSelf: 'center',
        marginTop: 90,
        width: '98%',
        height: 75
    },
    homeScreenText: {
        fontSize: 30,
        lineHeight: 60
    },
    homeScreenTitle: {
        fontSize: 60,
        lineHeight: 110
    }
});