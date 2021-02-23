import React, { Component, useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";

import ScreenStyles from "../styles/screenStyles";
import colors from "../styles/colors";
import ButtonBar from "../components/ButtonBar";


export const Name = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={ScreenStyles.container}>
      <Text style={ScreenStyles.prompt}>Please input your name:</Text>
      <TextInput
        style={ScreenStyles.textBox}
        placeholder="First Name (ex. John)"
        onChangeText={text => {setFirstName(text)}}
      />
      <TextInput
        style={ScreenStyles.textBox}
        placeholder="Last Name (ex. Smith)"
        onChangeText={text => {setLastName(text)}}
      />
      <ButtonBar
        onBackPress={navigation.goBack}
        onNextPress={() => {
          if (firstName === '') {
            alert("First name can not be empty")
            return;
          }
          if (lastName === '') {
            alert("Last name can not be empty")
            return;
          }
          console.log(firstName, lastName)
          navigation.navigate('Email', {firstName: firstName, lastName: lastName});
        }}
      />
    </View>
  )
}

// export default class Name extends Component {
//   constructor(props){
//     super(props);
//   }
//   state = {
//     firstName: '',
//     lastName: ''
//   }
//
//   handleFirstNameChange = (firstName) => {
//     this.setState({firstName: firstName})
//   }
//
//   handleLastNameChange = (lastName) => {
//     this.setState({lastName: lastName})
//   }
//
//   onNextPress = () => {
//     if (this.state.firstName === '') {
//       alert("First name can not be empty")
//       return;
//     }
//     if (this.state.lastName === '') {
//       alert("Last name can not be empty")
//       return;
//     }
//     this.props.navigation.navigate('Email', {firstName: this.state.firstName, lastName: this.state.lastName});
//   }
//
//   render() {
//     return (
//       <View style={ScreenStyles.container}>
//         <Text style={ScreenStyles.prompt}>Please input your name:</Text>
//         <TextInput
//           style={ScreenStyles.textBox}
//           placeholder="First Name (ex. John)"
//           onChangeText={text => this.handleFirstNameChange(text)}
//         />
//         <TextInput
//           style={ScreenStyles.textBox}
//           placeholder="Last Name (ex. Smith)"
//           onChangeText={text => this.handleLastNameChange(text)}
//         />
//         <ButtonBar
//           onBackPress={this.props.navigation.goBack}
//           onNextPress={this.onNextPress}
//         />
//       </View>
//
//
//     )
//   }
// }
