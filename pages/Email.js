import React, { Component } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";

import ScreenStyles from "../styles/screenStyles";
import colors from "../styles/colors";
import ButtonBar from "../components/ButtonBar";


export default class Email extends Component {
  constructor(props){
    super(props);
  }
  state = {
    email: ''
  }

  handleEmailChange = (email) => {
    this.setState({email: email})
  }

  onNextPress = () => {
    if (this.state.email === '') {
      alert("Email can not be empty")
      return;
    }
    //other checks

    this.props.navigation.navigate('Password', {
      firstName: this.props.route.params.firstName,
      lastName: this.props.route.params.lastName,
      email: this.state.email
    });
  }

  render() {
    return (
      <View style={ScreenStyles.container}>
        <Text style={ScreenStyles.prompt}>Please input name your email:</Text>
        <TextInput
          style={ScreenStyles.textBox}
          placeholder="Email"
          onChangeText={text => this.handleEmailChange(text)}
        />
        <ButtonBar
          onBackPress={this.props.navigation.goBack}
          onNextPress={this.onNextPress}
        />
      </View>


    )
  }
}
