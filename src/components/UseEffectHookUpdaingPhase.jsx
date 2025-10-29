import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHookUpdaingPhase = () => {
      const [count, setCount] = useState(0);
      const [score, setScore] = useState(20);
      useEffect(() => {
    console.log('razia is back');
  },[score]); 
 return (
    <View>
      <Text style={{ fontSize: 50 }}>RLTSQUARE</Text>
      <Text style={{ fontSize: 50 }}>Count : {count}</Text>
      <Text style={{ fontSize: 50 }}>Score : {score}</Text>
       <Button 
        title="Press Count" 
        onPress={() => setCount(count + 1)}
        // Button click hone par count ko 1 se increment karega
      />
       <Button 
        title="Press Score" 
        onPress={() => setScore(score + 10)}
        // Button click hone par count ko 1 se increment karega
      />

    </View>
  )
}

export default UseEffectHookUpdaingPhase
//use effect ma call back function bana sakta ha 
//componenet ki state update hongi is code ma har line ma commenting daal da