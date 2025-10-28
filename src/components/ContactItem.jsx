// src/components/ContactItem.jsx

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/contactStyles'; // 👈 ek folder upar

const ContactItem = ({ name, phone }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

export default ContactItem;
