import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import GStyles from '../global/globalStyles';
import FText from './FText';

const FTextInput = ({error, ...props}) => (
  <>
    <TextInput
      style={styles.container}
      placeholderTextColor={GStyles.appBGLight}
      autoCapitalize="none"
      {...props}
    />
    <View style={styles.errorMsg}>
      {error && <FText color="#d10a0a">{error}</FText>}
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: 14,
    backgroundColor: GStyles.secondaryText,
    height: 60,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 24,
    fontFamily: GStyles.fontFamily,
  },
  errorMsg: {
    height: 30,
    marginBottom: 14,
  },
});

export default FTextInput;
