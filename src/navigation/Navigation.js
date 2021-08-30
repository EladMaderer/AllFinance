import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GStyles from '../global/globalStyles';

import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = GStyles.appBG;

const screenOptions = {
  headerStyle: {
    backgroundColor: GStyles.appBG,
  },
  headerTitleStyle: {
    fontFamily: GStyles.fontFamilyMedium,
    fontSize: 25,
  },
  headerTintColor: GStyles.secondaryText,
  headerTitleAlign: 'center',
};

const Navigation = () => (
  <NavigationContainer theme={navTheme}>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Sign In',
          // headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
