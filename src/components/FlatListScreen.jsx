// React aur React Native se required components import kar rahe hain
import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

// Functional component ka naam FlatListScreen
const FlatListScreen = () => {

  // Step 1: Array form mein data store kiya (static data)
  // Har object ke andar ek unique id, name aur age di gayi hai
  const users = [
    { id: '1', name: 'Rizwan', age: 25 },
    { id: '2', name: 'Ali', age: 27 },
    { id: '3', name: 'Ahmed', age: 23 },
    { id: '4', name: 'Sara', age: 21 },
  ];

  // Step 2: Return statement ke andar UI define kiya gaya hai
  return (
    // Main container view — jisme sari screen ka layout hai
    <View style={styles.container}>
      
      {/* Heading text — list ke upar title show karega */}
      <Text style={styles.heading}>👥 User List</Text>

      {/* Step 3: FlatList component use kar rahe hain */}
      <FlatList
        // 'data' prop ke andar array pass karte hain jise render karna hai
        data={users}

        // 'keyExtractor' har item ko ek unique key deta hai (performance ke liye)
        keyExtractor={(item) => item.id}

        // 'renderItem' ek function hota hai jo har item ko screen par show karta hai
        // Ye function har object (item) ko ek view ke andar render karega
        renderItem={({ item }) => (
          <View style={styles.box}>
            {/* User ka name show karega */}
            <Text style={styles.name}>Name: {item.name}</Text>
            {/* User ki age show karega */}
            <Text style={styles.age}>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Step 4: StyleSheet — yah CSS jaisi styling hoti hai React Native ke liye
const styles = StyleSheet.create({
  container: {
    flex: 1, // Screen ka pura space lega
    backgroundColor: '#ecececff', // Dark background color
    padding: 20, // Thoda space andar se (margin jaisa)
  },
  heading: {
    fontSize: 28, // Font ka size
    fontWeight: 'bold', // Bold text
    color: '#00BFFF', // Sky blue color
    marginBottom: 20, // Neeche gap
    textAlign: 'center', // Center alignment
  },
  box: {
    backgroundColor: '#1E90FF', // Sky blue background for each box
    padding: 15, // Box ke andar ka spacing
    marginVertical: 8, // Har box ke beech gap
    borderRadius: 10, // Rounded corners
  },
  name: {
    color: '#fff', // White text color
    fontSize: 20, // Large text size
  },
  age: {
    color: '#eee', // Slightly gray text color
    fontSize: 16, // Smaller text size
  },
});

// Step 5: Component ko export karna taake dusri files me use ho sake
export default FlatListScreen;
