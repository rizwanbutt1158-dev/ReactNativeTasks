// ContactListScreen.jsx
// Ye screen poori contact list ko display karti hai FlatList ke through

import React from 'react';
import { View, FlatList, Text } from 'react-native';
// Har single contact ke liye ContactItem component import
import ContactItem from '../../components/ContactItem';
// Contacts ka data import (array of objects)
import contactsData from '../../data/contactsData';
// Styles import
import styles from '../../styles/contactStyles';

const ContactListScreen = () => {
  return (
    // Screen ka main container style ke sath
    // Border lagaya gaya hai (red) testing ke liye dekhne ko style apply ho raha hai ya nahi
    <View style={[styles.container, { borderWidth: 2, borderColor: 'red' }]}>
      
      {/* Title text for the screen */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        📞 Contact List
      </Text>

      {/* FlatList component list render karta hai dynamic data ke sath */}
      <FlatList
        data={contactsData} // Array of contacts
        keyExtractor={(item) => item.id} // Unique key har contact ke liye
        renderItem={({ item }) => (
          // Har contact ke liye ContactItem component render karte hain
          <ContactItem name={item.name} phone={item.phone} />
        )}
      />
    </View>
  );
};

// Component export taake navigation ya main app me use ho sake
export default ContactListScreen;
