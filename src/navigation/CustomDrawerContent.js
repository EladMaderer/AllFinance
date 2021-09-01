import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {signOut} from '../actions/signInActions';
import GStyles from '../global/globalStyles';

const CustomDrawerContent = props => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        labelStyle={styles.labelStyle}
        label="Sign Out"
        onPress={() => {
          dispatch(signOut());
          alert('Signed out successfully');
        }}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    color: GStyles.appBG,
      fontFamily: GStyles.fontFamily,
      fontSize: 22,
  },
});

export default CustomDrawerContent;
