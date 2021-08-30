import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import GStyles from '../global/globalStyles';

const FTextInput = ({...props}) => (
  <TextInput
    style={styles.container}
    placeholderTextColor={GStyles.appBGLight}
    {...props}
  />
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 14,
    backgroundColor: GStyles.secondaryText,
    height: 50,
    borderRadius: 12,
    padding: 14,
    fontSize: 26,
    fontFamily: GStyles.fontFamily,
  },
});

export default FTextInput;
