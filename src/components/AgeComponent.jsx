import React, { Component } from 'react'; 
// React aur Component import kar rahe hain, kyunki AgeComponent ek class component hai

import { View, Text, Button } from 'react-native'; 
// React Native ke basic UI elements import kiye: 
// View → container
// Text → text display
// Button → clickable button

// AgeComponent class component
class AgeComponent extends Component {
  constructor(props) {
    super(props); 
    // super(props) parent class (Component) ka constructor call karta hai
    // props constructor me pass karna optional hai lekin recommended hai

    // component ka initial state define kar rahe hain
    this.state = { age: 20 }; // initial age 20
  }

  // method jo button click pe age update karega
  handleChangeAge = () => {
    this.setState({ age: 25 }); 
    // setState se state update hoti hai aur component re-render hota hai
  }

  render() {
    return (
      // View ek container hai, jisme hum multiple UI elements rakh sakte hain
      <View style={{ marginTop: 20 }}>
        {/* Text element ke andar hi string render karni hai */}
        <Text style={{ fontSize: 20 }}>Age: {this.state.age}</Text>
        {/* Button element jis par click hone par handleChangeAge function call hoga */}
        <Button title="Change Age" onPress={this.handleChangeAge} />
      </View>
    );
  }
}

// component ko export kar rahe hain taake dusre components me use kar sakein
export default AgeComponent;
