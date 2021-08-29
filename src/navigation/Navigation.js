import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../global/globalStyles';

import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = Colors.appBG;

const Navigation = () => (
  <NavigationContainer theme={navTheme}>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.appBG,
        },
        headerTintColor: '#fff3db',
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
