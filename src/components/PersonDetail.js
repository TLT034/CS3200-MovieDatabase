import React, { Component } from 'react';

import { ScrollView, StyleSheet, Image, View } from 'react-native';

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
    Accordion,
    Content,
    Container
} from 'native-base';



export default class PersonDetail extends Component {
    constructor(props) {
        super(props);

        this.image = this.props.data.getImagePath();
        this.name = this.props.data.getName();
        this.popularity = this.props.data.getPopularity();
        this.birthday = this.props.data.getBirthday();
        this.deathday = this.props.data.getDeathday();
        this.birthPlace = this.props.data.getPlaceOfBirth();
        this.bio = this.props.data.getBiography();

        this.credits = this.props.credits;
    }


    render() {
        const bio = [{ title: 'Biography', content: this.bio }];

        return (
            <ScrollView>
                <Card>
                    <CardItem>
                        <Left>
                            <Image style={{ width: 92, height: 138 }} source={{ uri: this.image }} />
                        </Left>
                        <Body>
                            <Text style={styles.name} >{this.name}</Text>
                            <Text note >Popularity: {this.popularity}</Text>
                            <Text note >Born: {this.birthday}</Text>
                            <Text note >Birthplace: {this.birthPlace}</Text>
                            <Text note >Death: {this.deathday}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Accordion style={{ width: '100%' }} dataArray={bio} />
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Text>Movies featuring {this.name}</Text>
                    </CardItem>
                    <CardItem>
                        {this.renderCredits()}
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }

    renderCredits() {
        let creditsList = [];

        this.credits.forEach(element => {
            creditsList.push(
                <View
                    style={{marginHorizontal: 3, width: 92}}
                    key={element.getImagePath() + " " + element.getTitle()}>
                    <Image
                        style={{ width: 92, height: 138, borderWidth: 1, borderColor: 'black' }}
                        source={{ uri: element.getImagePath() }} />
                    <Text style={{textAlign: 'center'}} >{element.getTitle()}</Text>
                    <Text style={{ textAlign: 'center' }} note>{element.getYear()}</Text>
                </View>
            );
        })

        return (<ScrollView style={{flexDirection: 'row'}} horizontal={true}>{creditsList}</ScrollView>);
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    name : {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    personInfo: {
        textAlign: 'right',
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