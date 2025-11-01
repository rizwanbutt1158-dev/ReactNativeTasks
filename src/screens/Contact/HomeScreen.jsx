import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Instagram</Text>
      <View style={styles.feedBox}>
        <Image
          source={{ uri: 'https://picsum.photos/300/300' }}
          style={styles.postImage}
        />
        <Text style={styles.caption}>Just chilling 😎</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#000',
  },
  feedBox: {
    marginTop: 30,
    alignItems: 'center',
  },
  postImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  caption: {
    marginTop: 10,
    fontSize: 16,
  },
});
