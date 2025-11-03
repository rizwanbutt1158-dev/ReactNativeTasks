/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
import axios from 'axios';

// Get screen height for full-screen view
const { height } = Dimensions.get('window');

// PUT_API Component (for updating existing user info)
const PUT_API = () => {

  // useState hook to store and manage form inputs
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  // This function updates the value of a field dynamically when the user types
  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // This function sends PUT request to backend and updates existing user record
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://10.0.2.2:3000/users/${formData.id}`,
        {
          name: formData.name,
          email: formData.email,
        },
      );

      // Alert user after successful update
      Alert.alert('✅ Success', 'Data updated successfully');

      // Log response in console for debugging
      console.log(response.data);

      // Clear form fields after submission
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      // Show alert if update fails
      Alert.alert('❌ Error', 'Failed to update data');
    }
  };

  // UI layout
  return (
    <View style={styles.fullScreen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          {/* Form title */}
          <Text style={styles.title}>🎓 Update Student Record</Text>

          {/* ID Field */}
          <Text style={styles.label}>Student ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your ID"
            placeholderTextColor="#888"
            value={formData.id}
            onChangeText={(value) => handleInput('id', value)}
          />

          {/* Name Field */}
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={formData.name}
            onChangeText={(value) => handleInput('name', value)}
          />

          {/* Email Field */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={formData.email}
            onChangeText={(value) => handleInput('email', value)}
            keyboardType="email-address"
          />

          {/* Submit button */}
          <View style={styles.buttonContainer}>
            <Button
              title="Update Information"
              color="#0056b3"
              onPress={handleUpdate}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles for full-page form
const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    height: height, // takes full height of device
    backgroundColor: '#e6f0ff', // soft blue background for clean look
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center', // centers horizontally
    paddingVertical: 40,
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#fff', // white card-style background
    borderRadius: 18, // rounded corners
    padding: 25,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
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
    overflow: 'hidden', // makes button corners rounded
  },
});

export default PUT_API;
