import { View, Text, Button } from 'react-native'
// React Native ke UI components import kar rahe hain
// View → container
// Text → text display
// Button → clickable button

import React, { useEffect, useState } from 'react'
// React import kar rahe hain
// useState → state ko functional component me use karne ke liye
// useEffect → side effects ya lifecycle methods ke liye

const UseEffectHook = () => {
  // Functional component define kiya
  // arrow function ke form me

  const [count, setCount] = useState(1);
  // useState hook use kiya
  // count → current state variable (initial value 1)
  // setCount → state update karne ka function

  useEffect(() => {
    console.log('hamza');
    // useEffect ka callback function run hoga
    // yahan side effect perform kar rahe hain
    // console me "hamza" print hoga
  }, []); 
  // dependency array empty hai → ye sirf component mount hone par run hoga
  // agar array me count daalte → ye count change hone par bhi run hota

  return (
    <View>
      {/* Parent container */}

      <Text style={{ fontSize: 50 }}>RLTSQUARE</Text>
      {/* Large text display */}

      <Text style={{ fontSize: 50 }}>Count : {count}</Text>
      {/* State variable count display */}

      <Button 
        title="Press" 
        onPress={() => setCount(count + 1)}
        // Button click hone par count ko 1 se increment karega
      />
    </View>
  )
}

export default UseEffectHook
// Component export kiya taake dusre components me use ho sake

// Notes:
// 1. useEffect me callback function component lifecycle jaisa kaam karta hai
//    - [] → componentDidMount jaisa
//    - [count] → componentDidUpdate jaisa
//    - return () => { cleanup } → componentWillUnmount jaisa
// 2. useState se state update karne par component re-render hota hai
