// React aur useState hook ko import kar rahe hain
import React, { useState } from 'react';

// React Native ke basic components import kar rahe hain
import { View, Text, Button } from 'react-native';

// Child component ko import kar rahe hain jisme hum 'count' bhejenge
import Child from './Child';

// Yeh hamara Parent Component hai jiska naam "Props" hai
const Props = () => {

  // useState hook lagaya gaya hai:
  // count -> ek variable (state) hai jo value store karta hai (initial = 0)
  // setCount -> ek function hai jo count ko update karta hai
  const [count, setCount] = useState(0);

  // Return part me hum layout define karte hain
  return (
    <View>
      {/* Heading text dikhane ke liye */}
      <Text style={{ fontSize: 60 }}>Props Example</Text>

      {/* Count value display kar rahe hain */}
      <Text style={{ fontSize: 40 }}>Count: {count}</Text>

      {/* Button:
          Jab button press hota hai, setCount function chal jata hai
          aur count ki value +1 ho jaati hai */}
      <Button title="Press" onPress={() => setCount(count + 1)} />

      {/* Child component ko data bhej rahe hain:
          yahan 'data' ek prop hai jisme hum count ki current value bhejte hain */}
      <Child data={count} />
    </View>
  );
};

// useState: component ke andar data store/update karne ke liye
// props: parent se child me data bhejne ke liye

// Component export kar rahe hain taake dusre files me use ho sake
export default Props;
