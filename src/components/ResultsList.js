import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native'


const ResultsList = ({title, results }) => {
    const navigation = useNavigation();

    if(!results.length){
        return null
    }

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text >{results.length}</Text> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id}
        data={results}
        renderItem={({item}) => (
        <TouchableOpacity onPress={() =>  navigation.navigate('ResultsShow', {id: item.id})}>
            <ResultsDetail result={item}/>
        </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
})