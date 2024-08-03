import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.constainer}>
        <Image style={styles.imageStyle}  source={{uri: result.image_url}} />
        <Text style={styles.title}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
    constainer: {
      marginLeft: 15
    },  
    title: {
        //fontSize: 16,
        fontWeight: 'bold'
    },
    imageStyle: {
      width: 250, 
      height: 120,
      marginBottom: 5
    },
})