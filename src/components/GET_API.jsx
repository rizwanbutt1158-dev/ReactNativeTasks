/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API = () => {
  // State me API se aane wala data store karne ke liye
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    // Component mount hone par sirf ek baar API call hoti hai
    axios.get('http://10.0.2.2:3000/users').then((result) => {
      // API se milne wala data state me save karte hain
      setMyData(result.data);
    });
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>GET API METHOD</Text>

      {/* myData ko map karke har user ka name screen par show karte hain */}
      {myData.map((item) => (
        <Text key={item.id} style={{ fontSize: 20, marginBottom: 10 }}>
          {item.name}
        </Text>
      ))}
    </View>
  );
};

export default GET_API;


//export default GET_API;

//useState([]) → myData naam ka state variable banaya gaya hai jisme API se aane wale data ko store karenge.

//useEffect(() => {...}, []) → Component jab pehli baar load hota hai tab ye function chal kar API call karta hai (sirf ek baar).

//axios.get('http://10.0.2.2:3000/users') → Ye request bhejta hai local server (port 3000) par data lene ke liye.

//.then((result) => setMyData(result.data)) → Jab data mil jata hai to usse myData state me save kar dete hain.

//myData.map((item) => (...)) → Har user ke data (name) ko loop karke screen par show karte hain.

//key={item.id} → Har element ko unique key dete hain taake React efficiently render kar sake.
