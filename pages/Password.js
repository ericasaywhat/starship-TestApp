import React, { Component } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";

import ScreenStyles from "../styles/screenStyles";
import colors from "../styles/colors";
import ButtonBar from "../components/ButtonBar";


export default class Password extends Component {
  constructor(props){
    super(props);
  }
  state = {
    password: '',
    confirmPassword: ''
  }

  handlePasswordChange = (password) => {
    this.setState({password: password})
  }

  handleConfirmPasswordChange = (password) => {
    this.setState({confirmPassword: password})
  }

  onNextPress = () => {
    if (this.state.password === '') {
      alert("Password can not be empty")
      return;
    }

    if (this.state.password === this.state.confirmPassword) {
      const newUser = {
        firstName: this.props.route.params.firstName,
        lastName: this.props.route.params.lastName,
        email: this.props.route.params.email,
        password: this.state.password
      }

      console.log(newUser);
      alert("Success");
    } else {
        alert("Passwords must match")
        return;
      }
  }

  render() {
    return (
      <View style={ScreenStyles.container}>
        <Text style={ScreenStyles.prompt}>Please input your password:</Text>
        <TextInput
          style={ScreenStyles.textBox}
          placeholder="Password"
          onChangeText={text => this.handlePasswordChange(text)}
        />
        <TextInput
          style={ScreenStyles.textBox}
          placeholder="Confirm Password"
          onChangeText={text => this.handleConfirmPasswordChange(text)}
        />
        <ButtonBar
          onBackPress={this.props.navigation.goBack}
          onNextPress={this.onNextPress}
        />
      </View>


    )
  }
}
