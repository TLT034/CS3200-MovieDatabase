import React, { Component } from 'react';

import {
    ListItem,
    Text,
    Left,
    Right,
    Body,
    Thumbnail
} from 'native-base';


export default class PersonSummary extends Component {
    constructor(props) {
        super(props);

        this.image = this.props.data.getImagePath();
        this.name = this.props.data.getName();
        this.popularity = this.props.data.getPopularity();

    }


    render() {

        return (
            <ListItem avatar button onPress={this.props.pressed} >
                <Left>
                    <Thumbnail source={{ uri: this.image }} />
                </Left>
                <Body style={{ height: 75}}>
                    <Text>{this.name}</Text>
                </Body>
                <Right>
                    <Text>Popularity: {this.popularity}</Text>
                </Right>
            </ListItem>
        )
    }
}