import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp';

export default function ResultsShowScreen({navigation, route}) {
    const [result, setResult ] = useState(null);

    console.log(result);

    // console.log("ResultShow");
    // console.log(navigation);
    // console.log(route);
    

    const id = route.params.id

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        console.log(response);
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null
    }

  return (
    <View>
      {/* <Text>ResultsShowScreen : {result.name} </Text> */}
      <FlatList 
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({item}) => {
            return (
                <Image style={styles.imageStyle} source={{uri: item}} />
            )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: '80%',
        height: 150,
        marginTop: 5,
    }
})