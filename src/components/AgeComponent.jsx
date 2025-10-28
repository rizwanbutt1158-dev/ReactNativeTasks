import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AgeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { age: 20 };
  }

  handleChangeAge = () => {
    this.setState({ age: 25 });
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Age: {this.state.age}</Text>
        <Button title="Change Age" onPress={this.handleChangeAge} />
      </View>
    );
  }
}

export default AgeComponent;
