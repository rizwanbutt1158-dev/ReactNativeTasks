/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

// Importing necessary components and libraries
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios'; // Axios is used to send HTTP requests (like POST, GET, etc.)

// Get device screen height (to ensure full-screen view)
const { height } = Dimensions.get('window');

// Creating a functional component named POST_API
const POST_API = () => {

  // useState hook for managing form input data (id, name, email)
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  // Function to handle text input changes dynamically
  // It updates the specific field (id, name, or email) based on user input
  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Function to handle form submission
  // Sends POST request to local API server (10.0.2.2 is localhost for Android Emulator)
  const handleSubmit = async () => {
    try {
      // Sending data to the backend API using axios.post()
      const response = await axios.post('http://10.0.2.2:3000/users', formData);

      // Shows success alert message
      Alert.alert('Success!', 'Data Submitted Successfully');

      // Logs response data from the server in console
      console.log(response.data);

      // Clears the form fields after successful submission
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      // If an error occurs, show an alert message
      Alert.alert('Error', 'Failed to submit data');
    }
  };

  // UI layout returned by the component
  return (
     <View style={styles.fullScreen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <Text style={styles.title}>🎓 College Admission Form</Text>

          <Text style={styles.label}>Student ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your ID"
            placeholderTextColor="#888"
            value={formData.id}
            onChangeText={(value) => handleInput('id', value)}
          />

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={formData.name}
            onChangeText={(value) => handleInput('name', value)}
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={formData.email}
            onChangeText={(value) => handleInput('email', value)}
            keyboardType="email-address"
          />

          <View style={styles.buttonContainer}>
            <Button title="Submit Application" color="#0056b3" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    height: height, // take full device height
    backgroundColor: '#e6f0ff', // light background
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center',
    paddingVertical: 40,
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003366',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    marginBottom: 18,
  },
  buttonContainer: {
    marginTop: 25,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default POST_API;