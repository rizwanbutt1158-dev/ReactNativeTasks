/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
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
import axios from 'axios';

/* 
  👉 Dimensions se hum screen ka height & width lete hain 
  taake app har mobile size pe proper fullscreen layout me dikhe.
*/
const { height, width } = Dimensions.get('window');

const PATCH_API = () => {
  /* 
    👉 useState ek hook hai jisme hum user ke likhe hue data ko store karte hain.
    Jab bhi user input field me kuch likhta hai, ye state update hoti rehti hai.
  */
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  /* 
    👉 Ye function tab chalta hai jab user kisi input me likhta hai.
    Ye dynamically field (id, name, email) update karta hai 
    bina puri state ko todne ke.
  */
  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  /* 
    👉 handleUpdate function jab button dabate ho to run hota hai.
    Ye axios.patch ke zariye backend (json-server ya API) me data update karta hai.
    Sirf wahi fields update hoti hain jinke andar user ne kuch likha ho.
    Async/await ka use isliye hai taake API ke response ka wait kare.
  */
  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `http://10.0.2.2:3000/users/${formData.id}`,
        {
          ...(formData.name && { name: formData.name }),
          ...(formData.email && { email: formData.email }),
        },
      );
      Alert.alert('Success', 'Data updated successfully');
      console.log(response.data);
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to update data');
    }
  };

  /* 
    👉 Return ke andar app ka pura UI (front-end design) bana hai.
    Ye ek scrollable form hai jisme ID, Name, Email fields aur ek submit button hai.
    ScrollView se ensure hota hai ke keyboard aane par bhi form screen se bahar na jaye.
  */
  return (
    <View style={styles.fullScreen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        
        {/* 
          👉 Ye form container card jaisa look deta hai.
          Iske andar humara form content aata hai jaise text fields aur button.
        */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>🩺 Update User Info (PATCH)</Text>

          {/* 
            👉 User ID field — iske bina backend ko pata nahi chalega 
            kis user ka data update karna hai.
          */}
          <Text style={styles.label}>User ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your ID"
            placeholderTextColor="#888"
            value={formData.id}
            onChangeText={(value) => handleInput('id', value)}
          />

          {/* 
            👉 Name field optional hai. Agar user name change karna chahe 
            to likh sakta hai, warna skip kar sakta hai.
          */}
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={formData.name}
            onChangeText={(value) => handleInput('name', value)}
          />

          {/* 
            👉 Email field bhi optional hai. User chahe to email update kar sakta hai.
            KeyboardType="email-address" dene se mobile ka email layout open hota hai.
          */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={formData.email}
            onChangeText={(value) => handleInput('email', value)}
            keyboardType="email-address"
          />

          {/* 
            👉 Ye button press karte hi handleUpdate() function call hota hai.
            Button ke andar humne color aur styling simple rakhi hai.
          */}
          <View style={styles.buttonContainer}>
            <Button title="Update Info" color="#0056b3" onPress={handleUpdate} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

/* 
  👉 StyleSheet ke andar humne app ka poora design likha hai.
  Background color light blue rakha gaya hai aur form white card me show hota hai.
  Borders, shadows, aur padding form ko modern aur clean look dete hain.
*/
const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    height: height,
    backgroundColor: '#e6f0ff', // light blue background
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // center vertically
    alignItems: 'center',
    paddingVertical: 40,
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 18,
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
    overflow: 'hidden',
  },
});

export default PATCH_API;
