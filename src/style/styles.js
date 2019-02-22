import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    searchContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    pickerArrow: {
        width: '8%',
        margin: 0,
        padding: 0
    },
    pickerText: {
        height: 40,
        lineHeight: 40,
        width: '25%',
        textAlign: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        margin: 0,
        padding: 0
    },
    searchInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        color: 'black',
        height: 40,
        width: '62%'
    },
    searchDescripton: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        marginBottom: 25
    },
});