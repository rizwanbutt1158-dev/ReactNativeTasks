import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const UseStateHook = () => {
  const [name, setName] = useState('Farzeen');

  // 👇 Ye alag function banaya hai
  const updateName = () => {
    setName('Rizwan');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>{name}</Text>
      <Button title="Change Name" onPress={updateName} />
    </View>
  );
};

export default UseStateHook;


//special function detta ha ka ap react ka features use karsaka
//apka component ko recheck karta rerender karta ha 
//arary desstructure js ka concept
//variable or use state hook, component ma statehook ko use nahi kar sakta variable ko kar sakta ha
