
import { View, Text,Button } from 'react-native'
import React from 'react';
import First from './src/components/First';

const App = () => {
  return (
    <View> // view ma wrap kar la ga 
      <Text style ={{ fontSize : 50 }}>RizwanIlyasButt</Text>
      <Text style ={{ fontSize : 50 }}>Devops</Text>
      <Button title = "Press Here"/>
      <First />
    </View>
  )
}

export default App