import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import ScreenStyles from "../styles/screenStyles";
import colors from "../styles/colors";


export default class ButtonBar extends Component {

  render() {
    return (
      <View style={ScreenStyles.buttonBar}>
        <TouchableHighlight className="BackButton" onPress={this.props.onBackPress.bind(this)}>
          <View style={ScreenStyles.secondaryButton}>
            <Text style={{color: colors.primary}}>Back</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight className="NextButton" onPress={this.props.onNextPress.bind(this)}>
          <View style={ScreenStyles.primaryButton}>
            <Text style={{color: colors.white}}>Next</Text>
          </View>
        </TouchableHighlight>
      </View>


    )
  }
}
