// React aur hooks import kar rahe hain (useState state manage karne ke liye)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Custom AlertBox component import kiya gaya
import AlertBox from '../../components/AlertBox';

// Ye screen sirf test karne ke liye hai ke AlertBox sahi kaam kar raha hai ya nahi
const AlertTestScreen = () => {
  // showAlert ek boolean state hai jo modal show/hide control karti hai
  const [showAlert, setShowAlert] = useState(false);

  return (
    // Parent container jisme sab elements center me aate hain
    <View style={styles.container}>
      {/* Header text jo screen ka title batata hai */}
      <Text style={styles.header}>Custom Alert Example</Text>

      {/* Button jo press hone par AlertBox open karta hai */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowAlert(true)} // button dabane par modal visible ho jata hai
      >
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>

      {/* Custom AlertBox component — ye tabhi show hota hai jab showAlert true ho */}
      <AlertBox
        visible={showAlert} // modal visible control
        title="Success 🎉" // title text
        message="Your form has been submitted successfully!" // detail message
        onClose={() => setShowAlert(false)} // OK button dabane par modal close
      />
    </View>
  );
};

// Export kar rahe hain taake app ke dusre hisso me use ho sake
export default AlertTestScreen;

// Styling define ki gayi hai UI ko neat aur centered banane ke liye
const styles = StyleSheet.create({
  container: {
    flex: 1, // full screen occupy karta hai
    justifyContent: 'center', // vertically center content
    alignItems: 'center', // horizontally center content
    backgroundColor: '#e5e5e5', // light grey background
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25, // button se distance banata hai
  },
  button: {
    backgroundColor: '#3797EF', // light blue button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10, // rounded button edges
  },
  buttonText: {
    color: '#fff', // white text on button
    fontSize: 18,
    fontWeight: '600', // slightly bold text
  },
});
