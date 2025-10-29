import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChild = () => {
        useEffect(() => {
       // console.log('Child component');
        return() => {
            console.log('Child componenet')
        }
      },[]); 
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Child Component</Text>
    </View>
  )
} 

export default ShowChild