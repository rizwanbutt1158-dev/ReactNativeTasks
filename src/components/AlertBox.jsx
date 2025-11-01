// React aur React Native ke core components import kar rahe hain
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

// Custom AlertBox component banaya gaya hai jo props se data leta hai
const AlertBox = ({
  visible = false, // ye control karta hai modal dikhana ya chupana
  title = "Default Title", // agar koi title pass na ho to default text dikhayega
  message = "Default message text", // default message jab prop na diya gaya ho
  onClose = () => {}, // jab OK button dabaya jaye to ye function run hota hai
}) => {
  return (
    // Modal ek built-in component hai jo overlay ke form me screen par pop-up dikhata hai
    <Modal
      visible={visible} // ye batata hai modal open hai ya nahi
      transparent={false} // agar true hota to background blur hota; yahan false hai
      animationType="fade" // modal open/close hone ka animation effect
    >
      {/* overlay ek dark background layer hai modal ke peeche */}
      <View style={styles.overlay}>
        {/* modalBox white card jaisa box hai jisme content (title, message, button) aata hai */}
        <View style={styles.modalBox}>
          {/* Title text dikhane ke liye */}
          <Text style={styles.title}>{title}</Text>

          {/* Message text user ko inform karta hai */}
          <Text style={styles.message}>{message}</Text>

          {/* OK button jisko press karke modal band hota hai */}
          <TouchableOpacity onPress={onClose} style={styles.btn}>
            <Text style={styles.btnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Component ko export kar rahe hain taake doosri files me use ho sake
export default AlertBox;

// StyleSheet me saare visual styles define kiye gaye hain
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // halka transparent black background
    justifyContent: 'center', // content ko vertically center karta hai
    alignItems: 'center', // horizontally center karta hai
    zIndex: 9999, // ensure karta hai ye sabse upar dikhai de
  },
  modalBox: {
    width: 300, // modal ka fixed width
    backgroundColor: '#fff', // white background
    borderRadius: 15, // rounded corners
    padding: 25, // inner spacing
    alignItems: 'center', // content ko center align karta hai
    elevation: 20, // Android ke liye shadow jaisa effect deta hai
  },
  title: {
    fontSize: 22, // title text bada aur bold
    fontWeight: 'bold',
    color: '#000', // black text color
    marginBottom: 10, // neeche thoda gap
  },
  message: {
    fontSize: 16,
    color: '#333', // halka dark grey text color
    textAlign: 'center', // center aligned text
    marginBottom: 20, // button se pehle spacing
  },
  btn: {
    backgroundColor: '#007BFF', // blue color button
    borderRadius: 8, // rounded edges
    paddingVertical: 10,
    paddingHorizontal: 25, // button size set karta hai
  },
  btnText: {
    color: '#fff', // white text on blue button
    fontSize: 16,
    fontWeight: 'bold', // bold text for emphasis
  },
});
