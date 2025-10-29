import { View, Text, Button } from 'react-native' // View, Text, Button import kar rahe hain UI banane ke liye
import React, { useState } from 'react' // React aur useState hook import kar rahe hain
import ShowChild from './ShowChild'; // Child component import kar rahe hain

const UseEffectHookUnmount = () => {
  // showChild ek state hai jo batata hai child component visible hai ya nahi
  const [showChild, setShowChild] = useState(true);

  return (
    <View>
      {/* Heading text */}
      <Text style={{ fontSize: 50 }}>RLTSQUARE</Text>

      {/* Agar showChild true hai to ShowChild component render hoga, warna null */}
      {showChild ? <ShowChild /> : null}

      {/* Button jo showChild ka value toggle karega (true/false) */}
      <Button 
        title="toggle" 
        onPress={() => setShowChild(!showChild)} // Button press hone par state change hoti hai
      />
    </View>
  );
};

export default UseEffectHookUnmount; // Component export kar rahe hain taake dusre files me use ho sake
