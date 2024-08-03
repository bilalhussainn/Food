import React from "react";
import {View, StyleSheet, TextInput} from 'react-native';
import Feather from '@expo/vector-icons/Feather';


const SearchBar = (props) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" color="black" />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search" 
                value={props.searchTerm} 
                onChangeText={props.onSearchTermChange} 
                //onSubmitEditing={}
                onEndEditing={props.onTermSubmitted}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;