import { View, Text } from 'react-native';
import React from 'react';
import styles from './style/style'; // Importing styles from external file

const Styling = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎨 Styling Example 🎨</Text>

      {/* Box 1 */}
      <View style={styles.box1}>
        <Text style={styles.boxText}>This is line one</Text>
      </View>

      {/* Box 2 */}
      <View style={styles.box2}>
        <Text style={styles.boxText}>This is line two</Text>
      </View>

      {/* Box 3 */}
      <View style={styles.box3}>
        <Text style={styles.boxText}>This is line three</Text>
      </View>
    </View>
  );
};

export default Styling;
