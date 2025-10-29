import { View, Text, Button } from 'react-native'; // Button bhi import karna zaroori hai
import React, { useState } from 'react';
import My from './My'; // Child component import

const HideShowToggle = () => {
  // State define ki gayi hai - true ka matlab component visible hai
  const [status, setStatus] = useState(true);

  return (
    <View>
      {/* Heading text */}
      <Text style={{ fontSize: 50 }}>RLTSQUARE</Text>

      {/* Agar status true hai to My component dikhao, warna kuch nahi */}
      {status ? <My /> : null}

      {/* Button to hide the component */}
      <Button
        title="Hide"
        onPress={() => setStatus(false)} // Hide button dabane par state false ho jayegi
      />

      {/* Button to show the component */}
      <Button
        title="Show"
        onPress={() => setStatus(true)} // Show button dabane par state true ho jayegi
      />

      {/* Button to toggle the component */}
      <Button
        title="Toggle"
        onPress={() => setStatus(!status)} // Toggle button state ko true/false karta rahega
      />
    </View>   
    //toggle , status 
  );
};

export default HideShowToggle;
