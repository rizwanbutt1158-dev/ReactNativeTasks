
//import { View, Text,Button } from 'react-native' // multiple cheezo ki import kar raha ha 
import React from 'react'; // sirf ek module import horaha ha
import { View } from 'react-native'
//import First from './src/components/First';
//import JSX from './src/components/JSX';
//import OnPress from './src/components/OnPress';
//import UseStateHook from './src/components/UseStateHook';
//import Props from './src/components/Props';
//import InputText from './src/components/InputText';
import Styling from './src/components/Styling';

const App = () => {
  return (
     
        <View style={{ flex: 1 }}>
     { /* <Text style ={{ fontSize : 50 }}>RizwanIlyasButt</Text> 
      <Text style ={{ fontSize : 50 }}>Devops</Text> {} bracket ko use karka , react native ka component ko use karka ek hi line ma likh sakta ha jsx
      <Button title = "Press Here"/>
      <First /> 
      <JSX /> 
      <OnPress /> 
      <UseStateHook /> 
      <Props />s
      <InputText /> */}
      <Styling />
    </View>
  )
}

export default App
