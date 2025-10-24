import { View, Text, Button,Alert } from 'react-native'
import React from 'react'
//alert
const OnPress = () => {

const getName = () =>{

//console.warn('Function');
  Alert.alert('Button Pressed!');


};
  return (
    <View>
      <Text style ={{ fontSize : 50 }}>Softrox</Text>
    {/* <Button title  = "Press Here" onPress={() => Alert.alert('Button Pressed!')}/>*/}
    <Button title  = "Press Here" onPress={getName}/>
    </View>
  )
}
export default OnPress