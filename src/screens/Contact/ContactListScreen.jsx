// src/screen/Contact/ContactListScreen.jsx

// React aur React Native ke components import kar rahe hain
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// Custom component import kar rahe hain jo ek single contact item show karta hai
import ContactItem from '../../components/ContactItem';

// Dummy contact data import kar rahe hain (array ke form me)
import contactsData from '../../data/contactsData';

// Styling file import kar rahe hain (common styles)
import styles from '../../styles/contactStyles';

// Main functional component
const ContactListScreen = () => {
  return (
    // ScrollView use kar rahe hain taake content scroll ho sake
    <ScrollView 
      style={{ flex: 1, backgroundColor: '#f9f9f9' }}  // background aur flex set kiya
      contentContainerStyle={{ padding: 10 }}           // andar ka padding diya
      showsVerticalScrollIndicator={true}               // scroll indicator dikhayega
    >
      {/* Title Text */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        📞 Contact Grid (map + ScrollView)
      </Text>

      {/* Grid container (2-column layout banane ke liye) */}
      <View 
        style={{
          flexDirection: 'row',       // horizontally arrange karega
          flexWrap: 'wrap',           // next line me wrap kar dega
          justifyContent: 'space-between', // even spacing between columns
        }}
      >
        {/* map() function se data iterate kar rahe hain */}
        {contactsData.map((item) => (
          <View
            key={item.id} // unique key har item ke liye (React requirement)
            style={{
              width: '48%',      // 2 columns banane ke liye 48% width di
              marginBottom: 10,  // niche thoda space
            }}
          >
            {/* Har contact ke liye ContactItem component call kar rahe hain */}
            <ContactItem name={item.name} phone={item.phone} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Component export kar rahe hain taake App.jsx me use ho sake
export default ContactListScreen;
