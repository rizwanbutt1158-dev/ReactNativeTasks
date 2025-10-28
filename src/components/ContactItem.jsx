// ContactItem.jsx
// Ye ek single contact item show karta hai (name + phone)

import React from 'react';
import { View, Text } from 'react-native';
// Styling import kar rahe hain styles folder se
import styles from '../styles/contactStyles'; // ek folder upar ja kar styles access kar rahe hain

// ContactItem ek functional component hai jo name aur phone props accept karta hai
const ContactItem = ({ name, phone }) => {
  return (
    // Har contact ke liye ek styled container
    <View style={[styles.itemContainer]}> 
      {/* Contact ka name bold font me show kar rahe hain */}
      <Text style={styles.name}>{name}</Text>

      {/* Contact ka phone number thoda chhote font me show ho raha hai */}
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

// Component ko export kar rahe hain taake doosri jagah use ho sake
export default ContactItem;
