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
import GStyles from '../global/globalStyles';
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
          <FText color={GStyles.appBG}>
            {`Hello ${username}`}
            {admin && (
              <TouchableOpacity>
                <FText>Del</FText>
              </TouchableOpacity>
            )}
          </FText>
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
    alignItems: 'center',
    borderWidth: 5
  },
  labelStyle: {
    color: GStyles.appBG,
    fontFamily: GStyles.fontFamily,
    fontSize: 22,
  },
});

export default CustomDrawerContent;
