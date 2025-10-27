// React Native aur React ke components import kar rahe hain
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// Component start
const InputText = () => {
  // useState hook: text value store karne ke liye
  const [name, setName] = useState('');

  // Function: jab button dabaye to field reset ho jaye
  const resetInput = () => {
    setName(''); // name ko empty kar dega
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Agar text likha gaya ho to display kare, warna kuch nahi */}
      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        {name ? `You typed: ${name}` : 'Type something below'}
      </Text>

      {/* Input field */}
      <TextInput
        style={{
          height: 50,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
          fontSize: 20,
          borderRadius: 10,
          marginBottom: 20,
        }}
        placeholder="Enter your name..."
        value={name} // input field me value show kare
        onChangeText={(text) => setName(text)} // jab bhi likhe, state update kare
      />

      {/* Button jo value reset karega */}
      <Button title="Reset" onPress={resetInput} />
    </View>
  );
};

// Component export kar rahe hain
export default InputText;
