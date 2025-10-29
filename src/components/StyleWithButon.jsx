// React Native se required components import kar rahe hain
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Alert } from 'react-native';
import React from 'react';

// Functional Component create kar rahe hain
const StyleWithButton = () => {

  // Ye function tab chalega jab TouchableOpacity button press hoga
  const handleOpacityPress = () => {
    Alert.alert('TouchableOpacity Pressed', 'You clicked the Opacity Button!');
  };

  // Ye function tab chalega jab TouchableHighlight button press hoga
  const handleHighlightPress = () => {
    Alert.alert('TouchableHighlight Pressed', 'You clicked the Highlight Button!');
  };

  // Component ka return part — UI render karta hai
  return (
    <View style={styles.container}>
      {/* Heading text */}
      <Text style={styles.title}>Child Component</Text>

      {/* TouchableOpacity Button */}
      <TouchableOpacity 
        style={styles.opacityButton}        // button styling
        onPress={handleOpacityPress}        // press hone par function call
      >
        <Text style={styles.buttonText}>Opacity Button</Text>
      </TouchableOpacity>

      {/* TouchableHighlight Button */}
      <TouchableHighlight
        style={styles.highlightButton}      // button styling
        underlayColor="#ffcccb"             // press hone par temporary color
        onPress={handleHighlightPress}      // press hone par function call
      >
        <Text style={styles.buttonText}>Highlight Button</Text>
      </TouchableHighlight>
    </View>
  );
};

// Component export kar rahe hain taake dusri file me use ho sake
export default StyleWithButton;

// StyleSheet — saari styling yahan likhi gayi hai
const styles = StyleSheet.create({
  container: {
    flex: 1,                               // full screen space
    alignItems: 'center',                  // horizontally center
    justifyContent: 'center',              // vertically center
    backgroundColor: '#f2f2f2',            // light background color
  },
  title: {
    fontSize: 50,                          // large text
    marginBottom: 40,                      // space below heading
    color: '#333',                         // dark gray color
  },
  opacityButton: {
    backgroundColor: '#4CAF50',            // green color
    paddingVertical: 12,                   // top-bottom spacing
    paddingHorizontal: 25,                 // left-right spacing
    borderRadius: 10,                      // rounded corners
    marginBottom: 20,                      // space below this button
  },
  highlightButton: {
    backgroundColor: '#2196F3',            // blue color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',                        // white text
    fontSize: 18,                          // medium-large text
    fontWeight: '600',                     // semi-bold
  },
});
