import React, { Component } from 'react'; 
// React aur Component import

import { View, Text, Button } from 'react-native'; 
// React Native ke UI elements import

import AgeComponent from './AgeComponent'; 
// AgeComponent import kiya, taake NameComponent ke andar use ho sake

// NameComponent class component
class NameComponent extends Component {
  constructor(props) {
    super(props); 
    // super(props) call karna zaruri hai taake this.props accessible ho

    // component ka initial state
    this.state = { name: 'Ali' }; // initial name Ali
  }

  // button click pe name update method
  handleChangeName = () => {
    this.setState({ name: 'Raza' }); 
    // setState se state update hoti hai aur component re-render hota hai
  }

  render() {
    return (
      // Parent container
      <View style={{ padding: 20 }}>
        {/* Name display */}
        <Text style={{ fontSize: 20 }}>Name: {this.state.name}</Text>
        {/* Button jis par click se handleChangeName call hoga */}
        <Button title="Change Name" onPress={this.handleChangeName} />
        {/* Nested AgeComponent ko yahan render kar rahe hain */}
        <AgeComponent />
      </View>
    );
  }
}

// component export kar rahe hain taake App me use ho sake
export default NameComponent;
