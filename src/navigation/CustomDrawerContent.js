import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {signOut} from '../actions/signInActions';
import {deleteAllUsers} from '../actions/signUpActions';
import GStyles from '../global/globalStyles';
import strings from '../global/strings.json';
import {FText} from '../common';

const CustomDrawerContent = props => {
  const dispatch = useDispatch();
  const {username, admin} = useSelector(
    ({signInReducer}) => signInReducer.loggedUser,
  );
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.menuItems}>
          <FText color={GStyles.appBG}>{`Hello ${username}`}</FText>
          {admin && (
            <TouchableOpacity onPress={() => dispatch(deleteAllUsers())}>
              <FText fontSize={18} color={GStyles.warningRed}>
                {strings.deleteUsers}
              </FText>
            </TouchableOpacity>
          )}
        </View>
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
    </>
  );
};

const styles = StyleSheet.create({
  menuItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  labelStyle: {
    color: GStyles.appBG,
    fontFamily: GStyles.fontFamily,
    fontSize: 22,
  },
});

export default CustomDrawerContent;
