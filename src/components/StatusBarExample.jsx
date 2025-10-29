// File: StatusBarExample.js

import React, { useState } from 'react'; // React aur useState hook import kar rahe hain
import { View, Text, StyleSheet, StatusBar, Pressable } from 'react-native'; // React Native components import

const StatusBarExample = () => {
  // StatusBar ke style aur visibility ko manage karne ke liye state variables
  const [barStyle, setBarStyle] = useState('light-content'); // Text/icons color
  const [bgColor, setBgColor] = useState('#8e44ad'); // Background color
  const [hidden, setHidden] = useState(false); // StatusBar hide/show

  return (
    <View style={styles.container}> {/* Main container view */}
      
      {/* StatusBar component */}
      <StatusBar
        backgroundColor={bgColor} // Android ke liye background color
        barStyle={barStyle}       // Text/icons color (light-content / dark-content)
        hidden={hidden}           // StatusBar hide/show
        animated={true}           // Animated transition
      />

      <Text style={styles.title}>Dynamic StatusBar Example</Text> {/* Title text */}

      {/* Button to set light-content StatusBar */}
      <Pressable
        style={styles.button} // Button styling
        onPress={() => {
          setBarStyle('light-content'); // Text/icons color white
          setBgColor('#8e44ad');        // Background purple
          setHidden(false);              // Show StatusBar
        }}
      >
        <Text style={styles.text}>Light Content</Text> {/* Button text */}
      </Pressable>

      {/* Button to set dark-content StatusBar */}
      <Pressable
        style={[styles.button, { backgroundColor: '#f39c12' }]} // Orange button
        onPress={() => {
          setBarStyle('dark-content'); // Text/icons color dark
          setBgColor('#f39c12');       // Background orange
          setHidden(false);            // Show StatusBar
        }}
      >
        <Text style={styles.text}>Dark Content</Text>
      </Pressable>

      {/* Button to hide StatusBar */}
      <Pressable
        style={[styles.button, { backgroundColor: '#2c3e50' }]} // Dark button
        onPress={() => setHidden(true)} // Hide StatusBar
      >
        <Text style={styles.text}>Hide StatusBar</Text>
      </Pressable>

      {/* Button to show StatusBar */}
      <Pressable
        style={[styles.button, { backgroundColor: '#27ae60' }]} // Green button
        onPress={() => setHidden(false)} // Show StatusBar
      >
        <Text style={styles.text}>Show StatusBar</Text>
      </Pressable>

    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,                     // Full screen height
    justifyContent: 'center',    // Center vertically
    alignItems: 'center',        // Center horizontally
    backgroundColor: '#ecf0f1',  // Container background
    padding: 20,                 // Padding
  },
  title: {
    fontSize: 22,                // Title font size
    fontWeight: 'bold',          // Bold text
    marginBottom: 25,            // Margin bottom
    color: '#34495e',            // Text color
  },
  button: {
    paddingVertical: 12,         // Vertical padding
    paddingHorizontal: 25,       // Horizontal padding
    borderRadius: 8,             // Rounded corners
    backgroundColor: '#8e44ad',  // Default button color
    marginVertical: 8,           // Vertical margin
  },
  text: {
    color: '#fff',               // Button text color
    fontSize: 16,                // Font size
    fontWeight: 'bold',          // Bold text
  },
});

export default StatusBarExample; // Component export
