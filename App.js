//import { createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen name='Search' component={SearchScreen} options={{ title: 'Business Search' }}/>
        <Stack.Screen name='ResultsShow' component={ResultsShowScreen} options={{ title: 'Restaurant' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

//Old Method


// const navigator = createStackNavigator({
//   Search: SearchScreen
// },
// {
// initialRouteName: 'Search',
// defaultNavigationOptions: {
//   title: "Business Search",
// }
// })
// export default createAppContainer(navigator);













// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
