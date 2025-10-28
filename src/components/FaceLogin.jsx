// React aur React Native components import kar rahe hain
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Main functional component — ye pura screen define karega
const FaceLogin = () => {
  // Email aur password store karne ke liye state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Jab user "Log In" button dabata hai tab ye function chalega
  const handleLogin = () => {
    console.log('Email:', email);     // Terminal me email print karega
    console.log('Password:', password); // Terminal me password print karega
    // Future me yahan API call ya authentication logic likh sakte ho
  };

  // Ye part UI render karega (screen pe dikhne wala content)
  return (
    <View style={styles.container}>
      {/* Facebook style heading */}
      <Text style={styles.logo}>facebook</Text>

      {/* Email input field */}
      <TextInput
        style={styles.input}
        placeholder="Email or Phone"       // Placeholder text
        placeholderTextColor="#999"       // Placeholder ka color
        value={email}                     // Current state value
        onChangeText={setEmail}           // Jab user likhe, state update ho
      />

      {/* Password input field */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry                   // Password hide karega (••••)
        value={password}                  // Current state value
        onChangeText={setPassword}        // Password update karega
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password link text */}
      <Text style={styles.forgotText}>Forgot Password?</Text>
    </View>
  );
};

// Styling (React Native StyleSheet object)
const styles = StyleSheet.create({
  // Main container style
  container: {
    flex: 1,                            // Pure screen cover kare
    justifyContent: 'center',           // Vertically center
    alignItems: 'center',               // Horizontally center
    backgroundColor: '#fff',            // White background
    padding: 20,                        // Inner spacing
  },

  // Facebook logo text style
  logo: {
    fontSize: 50,                       // Large font
    color: '#1877F2',                   // Facebook blue
    fontWeight: 'bold',                 // Bold letters
    marginBottom: 40,                   // Space below logo
  },

  // Input fields style
  input: {
    width: '90%',                       // 90% screen width
    height: 50,                         // Height of text box
    borderColor: '#ccc',                // Light gray border
    borderWidth: 1,                     // Border thickness
    borderRadius: 8,                    // Rounded corners
    paddingHorizontal: 15,              // Inner padding
    marginBottom: 15,                   // Space below each input
    fontSize: 16,                       // Text size
  },

  // Login button style
  button: {
    width: '90%',
    backgroundColor: '#1877F2',         // Facebook blue color
    paddingVertical: 12,                // Vertical padding
    borderRadius: 8,                    // Rounded corners
    alignItems: 'center',               // Text center align
  },

  // Login button text style
  buttonText: {
    color: '#fff',                      // White text
    fontSize: 18,                       // Bigger text
    fontWeight: 'bold',                 // Bold text
  },

  // Forgot password text style
  forgotText: {
    color: '#1877F2',                   // Blue color
    marginTop: 15,                      // Space above text
    fontSize: 14,                       // Normal font size
  },
});

// Component export kar rahe hain taake App.js me use ho sake
export default FaceLogin;
