import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer> 
      <SafeAreaProvider style={{flex:1}}>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen 
            name='home' 
            component={HomeScreen} 
            options={{headerShown:false}} 
          />

          <Stack.Screen 
            name='details' 
            component={DetailsScreen} 
            options={{headerShown:false}} 
            initialParams={{itemId: "BID-11"}}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App