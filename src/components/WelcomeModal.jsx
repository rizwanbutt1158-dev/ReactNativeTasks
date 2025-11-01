import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const WelcomeModal = ({ visible, onClose, onForward, isLogin }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>
            {isLogin ? 'Welcome Back!' : 'Welcome to Join Us!'}
          </Text>
          <View style={styles.btnRow}>
            <TouchableOpacity onPress={onClose} style={styles.btn}>
              <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onForward} style={styles.btn}>
              <Text style={styles.btnText}>Forward</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10,
  },
  btn: {
    backgroundColor: '#0095f6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default WelcomeModal;
