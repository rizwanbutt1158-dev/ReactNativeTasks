import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import React from 'react';

const PressableComponent = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#6e3b6e' : '#8e44ad' },
        ]}
        onPress={() => Alert.alert('onPress', 'Button Pressed!')}
        onPressIn={() => console.log('onPressIn - Finger Down')}
        onPressOut={() => console.log('onPressOut - Finger Up')}
        onLongPress={() => Alert.alert('onLongPress', 'Button Long Pressed!')}
      >
        <Text style={styles.text}>Press Me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PressableComponent;
