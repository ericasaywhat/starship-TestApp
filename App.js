import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"

import Home from "./pages/Home";
import { Name } from "./pages/Name";
import Email from "./pages/Email";
import Password from "./pages/Password";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={"Home"}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Password" component={Password} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default () => {
  return <App />;
}
