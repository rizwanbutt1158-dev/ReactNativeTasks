import React from 'react';
import { View } from 'react-native';
import FaceLogin from './src/components/FaceLogin'; // ensure correct path

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <FaceLogin />
    </View>
  );
};

export default App;
