import React, { Component } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";

import ScreenStyles from "../styles/screenStyles";
import colors from "../styles/colors";

export default class Home extends Component {

  render() {
    return (
      <View style={ScreenStyles.container}>
        <Text style = {ScreenStyles.title}>Welcome!</Text>
        <TouchableHighlight className="GetStartedButton" onPress={() => this.props.navigation.navigate('Name')}>
          <View style={ScreenStyles.primaryButton}>
            <Text style={{color: colors.white}}>Get Started!</Text>
          </View>
        </TouchableHighlight>

      </View>
    )
  }
}
