// React aur useRef ko import kar rahe hain
import React, { useRef } from 'react';

// React Native ke basic components import kar rahe hain
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

// Functional component banaya hai — UseRefHook
const UseRefHook = () => {

  // useRef hook ka use karke inputRef naam ka reference bana rahe hain
  // isme TextInput ka direct reference (link) store hoga
  const inputRef = useRef(null);

  // Ye function button click hone par chalega
  const handleSubmit = () => {
    // Check karte hain agar inputRef me current value maujood hai
    if (inputRef.current) {
      // setNativeProps() se hum TextInput ke native properties (style/text) directly update kar sakte hain
      inputRef.current.setNativeProps({
        // TextInput ke andar likha hua text set kar rahe hain
        text: 'Rizwan Ilyas Butt',
        // Background color light yellow kar rahe hain
        style: { backgroundColor: '#FFFACD' },
      });
    }
  };

  // Ab hum screen par UI return kar rahe hain
  return (
    <View style={styles.container}>
      {/* Heading text */}
      <Text style={styles.title}>UseRef Hook Example</Text>

      {/* Ye TextInput field hai jisme user kuch likh sakta hai */}
      {/* isme ref={inputRef} lagane se ye inputRef variable se link ho gaya */}
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Enter something..."
        placeholderTextColor="#999"
      />

      {/* TouchableOpacity ek button ki tarah behave karta hai */}
      {/* Jab user button press karega to handleSubmit() function chalega */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

// Component ko export kar rahe hain taake dusre file me use kar sakein
export default UseRefHook;

// StyleSheet object me sabhi styles define kiye gaye hain
const styles = StyleSheet.create({
  // Main container style — screen ke beech me content center me show karega
  container: {
    flex: 1,
    justifyContent: 'center', // vertically center
    alignItems: 'center',     // horizontally center
    backgroundColor: '#fff',  // background white
    padding: 20,              // thoda space andar se
  },
  // Heading text ka style
  title: {
    fontSize: 22,             // font size thoda bada
    fontWeight: 'bold',       // text bold
    marginBottom: 20,         // neeche space
  },
  // Input box ka style
  input: {
    width: '80%',             // screen ke 80% width lega
    borderWidth: 1,           // border add karega
    borderColor: '#ccc',      // border light grey
    borderRadius: 10,         // rounded corners
    padding: 10,              // andar ka space
    fontSize: 16,             // text size
    marginBottom: 20,         // neeche space
  },
  // Button ka style
  button: {
    backgroundColor: 'pink',  // button ka color pink
    paddingVertical: 12,      // upar-neeche padding
    paddingHorizontal: 30,    // left-right padding
    borderRadius: 10,         // rounded corners
  },
  // Button ke andar text ka style
  buttonText: {
    color: '#000',            // text black
    fontSize: 16,             // text size medium
    fontWeight: 'bold',       // text bold
  },
});

//🔍 Explanation:

//useRef(null) → input field ka direct reference store karta hai.

//inputRef.current.setNativeProps() → input field ke text aur style ko update karta hai bina re-render ke.

//Button click hone par:

//"Rizwan Ilyas Butt" text input me aata hai.

//Background light yellow (#FFFACD) ho jata hai.

//TouchableOpacity use kiya gaya hai taake button ko custom style mil sake (color pink).