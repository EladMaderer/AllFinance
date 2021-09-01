import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GStyles from '../global/globalStyles';

import CustomDrawerContent from './CustomDrawerContent';
import SignIn from '../screens/SignIn';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = GStyles.appBG;

const globalScreenOptions = {
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

const drawerNav = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        ...globalScreenOptions,
        drawerStyle: {
          backgroundColor: '#b5b5b5',
          width: '60%',
        },
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          color: GStyles.appBG,
          fontFamily: GStyles.fontFamily,
          fontSize: 22,
        },
        // drawerType: 'front',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomePage" component={HomePage} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const stackNav = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Sign In',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const Navigation = () => {
  const isSignedIn = useSelector(state => state.signInReducer.userSignedIn);
  return isSignedIn ? drawerNav() : stackNav();
};

export default Navigation;
