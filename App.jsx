//import 'react-native-gesture-handler';
//import { View, Text,Button } from 'react-native' // multiple cheezo ki import kar raha ha 
import React from 'react'; // sirf ek module import horaha ha
import { View } from 'react-native'
//import First from './src/components/First';
//import JSX from './src/components/JSX';
//import OnPress from './src/components/OnPress';
//import UseStateHook from './src/components/UseStateHook';
//import Props from './src/components/Props';
//import InputText from './src/components/InputText';
//import Styling from './src/components/Styling';
//import FlatListScreen from './src/components/FlatListScreen';
//import SectionListScreen from './src/components/SectionListScreen';
//import FaceLogin from './src/components/FaceLogin';
//import ContactListScreen from './src/screens/Contact/ContactListScreen';
//import NameComponent from './src/components/NameComponent';
//import UseEffectHook from './src/components/UseEffectHook'
//import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdaingPhase';
//import UseEffectHookUnmount from './src/components/UseEffectHookUnmount';
//import HideShowToggle from './src/components/HideShowToggle';
//import  LightDarkMode from './src/components/LightDarkMode';
//import CalendarToggle from './src/components/CalendarToggle';
//import  StyleWithButon from './src/components/StyleWithButon';
//import Loader from './src/components/Loader';
//import PressableCmponent from './src/components/PressableCmponent';
//import StatusBarExample from './src/components/StatusBarExample';
//import UseRefHook from './src/components/UseRefHook';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import AuthScreen from './src/screens/Contact/AuthScreen';
//import HomeScreen from './src/screens/Contact/HomeScreen';
import AlertTestScreen from './src/screens/Contact/AlertTestScreen';
//const Stack = createStackNavigator();

const App = () => {
  return (
     <View style ={{ flex:1}}>
      { /*   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
         <View style={{ flex: 1 }}>
   <Text style ={{ fontSize : 50 }}>RizwanIlyasButt</Text> 
      <Text style ={{ fontSize : 50 }}>Devops</Text> {} bracket ko use karka , react native ka component ko use karka ek hi line ma likh sakta ha jsx
      <Button title = "Press Here"/>
      <First /> 
      <JSX /> 
      <OnPress /> 
      <UseStateHook /> 
      <Props />s
      <InputText /> 
      <Styling />
      <FlatListScreen />
      <SectionListScreen />
      <FaceLogin /> 
      <ContactListScreen />
      <NameComponent />  
      <UseEffectHook />
      <UseEffectHookUpdatingPhase /> 
      <UseEffectHookUnmount /> 
      <HideShowToggle /> 
     < LightDarkMode />
     <CalendarToggle /> 
     <StyleWithButon /> 
     <Loader />  
     <PressableCmponent />
     <StatusBarExample /> 
     <UseRefHook /> */}
     <AlertTestScreen />
    </View>
  )
}

export default App
