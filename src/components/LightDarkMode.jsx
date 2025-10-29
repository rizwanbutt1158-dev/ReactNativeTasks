import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const LightDarkMode = () => {
  // State define kar rahe hain — true = Light Mode, false = Dark Mode
  const [isLightMode, setIsLightMode] = useState(true);

  // Style dynamic based on mode
  const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isLightMode ? 'white' : 'black', // Background color toggle hoga
  };

  const textStyle = {
    fontSize: 30,
    color: isLightMode ? 'black' : 'white', // Text ka color opposite hoga
  };

  return (
    <View style={containerStyle}>
      {/* Mode ka title */}
      <Text style={textStyle}>
        {isLightMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </Text>

      {/* Toggle button */}
      <Button
        title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        onPress={() => setIsLightMode(!isLightMode)} // Yahan toggle ho raha hai (true <-> false)
      />
    </View>
  );
};

export default LightDarkMode;
