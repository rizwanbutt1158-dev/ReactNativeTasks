// React aur React Native ke basic components import kar rahe hain
import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

// Functional component define kar rahe hain
const SectionListScreen = () => {

  // Yeh humara nested array hai — SectionList ko sections ke form mein data chahiye hota hai
  const DATA = [
    {
      // Har section ka ek title hota hai
      title: 'Fruits',
      // Aur ek data array hota hai jisme us section ke items hote hain
      data: ['Apple', 'Banana', 'Orange'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Broccoli', 'Spinach'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Juice', 'Tea'],
    },
  ];

  return (
    // View parent container ke liye — jisme sab kuch render hoga
    <View style={styles.container}>
      
      {/* Heading text */}
      <Text style={styles.header}>Softrox</Text>

      {/* SectionList component start */}
      <SectionList
        // Yeh main prop hai jisme hum apna nested data array dete hain
        sections={DATA}

        // Har item ke liye unique key generate karta hai
        keyExtractor={(item, index) => item + index}

        // renderItem ek function hai jo har item show karta hai
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item}</Text>
        )}

        // renderSectionHeader ek function hai jo har section ka title show karta hai
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
      {/* SectionList end */}
    </View>
  );
};

// StyleSheet — yahan hum styling likh rahe hain
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // andar se gap
  },
  header: {
    fontSize: 40, // text size
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // neeche space
  },
  sectionHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#1e7cdbff', // halka gray background
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    paddingLeft: 20, // thoda left margin
    paddingVertical: 5, // upar neeche spacing
  },
});

// Component export kar rahe hain taake doosri file mein use ho sake
export default SectionListScreen;
