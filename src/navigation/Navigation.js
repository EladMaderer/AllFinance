import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GStyles from '../global/globalStyles';
import {nav} from '../global/globalConst';

import CustomDrawerContent from './CustomDrawerContent';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import HomePage from '../screens/HomePage';
import AllUsers from '../screens/AllUsers';

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

const DrawerNav = (admin) => {
  return (
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
        {admin && (
          <Drawer.Screen
            name={'AllUsers'}
            component={AllUsers}
            options={{
              title: 'Registered Users',
            }}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const StackNav = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name={nav.SIGN_IN}
        component={SignIn}
        options={{
          title: 'Sign In',
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name={nav.SIGN_UP}
        component={SignUp}
        options={{
          title: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const Navigation = () => {
  const {admin} = useSelector(({signInReducer}) => signInReducer.loggedUser);
  const isSignedIn = useSelector(
    ({signInReducer}) => signInReducer.userSignedIn,
  );
  return isSignedIn ? DrawerNav(admin) : StackNav();
};

export default Navigation;
