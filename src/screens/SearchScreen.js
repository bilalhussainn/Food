import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => { //navigation
    
    const [searchTerm, onSearchTermChange] = useState("")
    const [searchAPI, results, errorMessage] = useResults()

    // console.log(results);

    const filterResultsByPrice = (price) => {
        //price === $ || $$ || $$$
        return results.filter((result) => result.price === price)

    }
    
    return (
        // <>
        <View style={{backgroundColor: "#FFF", borderColor: 'red', borderWidth: 10, flex:1}}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={onSearchTermChange} 
                onTermSubmitted={() => {
                    //console.log("on Term Submitted from search screen");
                    searchAPI(searchTerm);
                }}
                />
            {/* <Text>Search Screen</Text>
            <Text>{searchTerm}</Text> */}

            {errorMessage && <Text>{errorMessage}</Text>}

            {/* <Text>we have found {results.length} results</Text> */}
            {/* navigation={navigation} */}
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}  /> 
                <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}  />
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
            </ScrollView>

        </View>
        // </>
        
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen;