import React, { Component } from 'react';

import {
    ListItem,
    Text,
    Left,
    Right,
    Body,
    Thumbnail
} from 'native-base';


export default class MovieSummary extends Component {
    constructor(props) {
        super(props);

        this.image = this.props.data.getImagePath();
        this.title = this.props.data.getTitle();
        this.popularity = this.props.data.getPopularity();
        this.releaseDate = this.props.data.getReleaseDate();
        this.overview = this.props.data.getBriefOverview();
    }


    render() {

        return (
            <ListItem avatar button onPress={this.props.pressed} >
                <Left>
                    <Thumbnail source={{ uri: this.image }} />
                </Left>
                <Body>
                    <Text>{this.title}</Text>
                    <Text note>{this.overview}</Text>
                </Body>
                <Right>
                    <Text>{this.releaseDate}</Text>
                    <Text note>Popularity: {this.popularity}</Text>
                </Right>
            </ListItem>
        )
    }
}