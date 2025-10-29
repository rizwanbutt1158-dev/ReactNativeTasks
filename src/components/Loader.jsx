// React Native se required components import kar rahe hain
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Loader = () => {
  // State variable — UI ke alag-alag states handle karega
  const [loading, setLoading] = useState(false);   // loader show karne ke liye
  const [showMessage, setShowMessage] = useState(false); // welcome message show karne ke liye

  // Function: jab button click ho, loader show ho 2-3 second ke liye
  const handleStart = () => {
    setLoading(true);          // loader ko visible karo
    setShowMessage(false);     // message hide karo agar visible ho

    // 3 seconds baad loader hata kar message show kar do
    setTimeout(() => {
      setLoading(false);
      setShowMessage(true);
    }, 3000);
  };

  // Function: jab "Back" button click ho
  const handleBack = () => {
    setShowMessage(false);     // message hide karo
    setLoading(false);         // loader band karo
  };

  return (
    <View style={styles.container}>
      {/* Agar loader visible nahi hai aur message bhi nahi hai → Start button show karo */}
      {!loading && !showMessage && (
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Start Loading</Text>
        </TouchableOpacity>
      )}

      {/* Agar loader true hai → ActivityIndicator show karo */}
      {loading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}

      {/* Jab message visible ho → Welcome message + Back button show karo */}
      {showMessage && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Welcome to my world!</Text>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Export kar rahe hain component
export default Loader;

// Styling part
const styles = StyleSheet.create({
  container: {
    flex: 1,                         // full screen use kare
    justifyContent: 'center',        // vertically center
    alignItems: 'center',            // horizontally center
    backgroundColor: '#f2f2f2',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  backButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  messageContainer: {
    alignItems: 'center',
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});


// loader hum tab use karta ha jab api sa data fetch karka lana ho 
// loader use karna ka lia activity indictor use karta ha 