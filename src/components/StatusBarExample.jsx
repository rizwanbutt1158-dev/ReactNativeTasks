// File: StatusBarExample.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Pressable } from 'react-native';

const StatusBarExample = () => {
  const [barStyle, setBarStyle] = useState('light-content');
  const [bgColor, setBgColor] = useState('#8e44ad');
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.container}>
      {/* Dynamic StatusBar */}
      <StatusBar
        backgroundColor={bgColor}
        barStyle={barStyle}
        hidden={hidden}
        animated={true}
      />

      <Text style={styles.title}>Dynamic StatusBar Example</Text>

      {/* Buttons to change StatusBar */}
      <Pressable
        style={styles.button}
        onPress={() => {
          setBarStyle('light-content');
          setBgColor('#8e44ad');
          setHidden(false);
        }}
      >
        <Text style={styles.text}>Light Content</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: '#f39c12' }]}
        onPress={() => {
          setBarStyle('dark-content');
          setBgColor('#f39c12');
          setHidden(false);
        }}
      >
        <Text style={styles.text}>Dark Content</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: '#2c3e50' }]}
        onPress={() => setHidden(true)}
      >
        <Text style={styles.text}>Hide StatusBar</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: '#27ae60' }]}
        onPress={() => setHidden(false)}
      >
        <Text style={styles.text}>Show StatusBar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#34495e',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: '#8e44ad',
    marginVertical: 8,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StatusBarExample;
