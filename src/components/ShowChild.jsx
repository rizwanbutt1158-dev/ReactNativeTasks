import { View, Text } from 'react-native' // View aur Text import kar rahe hain
import React, { useEffect } from 'react' // useEffect hook import kar rahe hain

const ShowChild = () => {
  useEffect(() => {
    // Yeh code tab run hota hai jab component mount (load) hota hai
    // console.log('Child component mounted');

    // Cleanup function tab run hota hai jab component unmount (remove) hota hai
    return () => {
      console.log('Child component unmounted');
    };
  }, []); // Empty dependency array -> effect sirf mount aur unmount par chalega

  return (
    <View>
      {/* Child component ka text */}
      <Text style={{ fontSize: 50 }}>Child Component</Text>
    </View>
  );
};

export default ShowChild; // Component export kar rahe hain
