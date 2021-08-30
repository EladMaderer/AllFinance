import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FText from './FText';
import GBStyles from '../global/globalStyles';

const FButton = ({children, color, onPress, style, title, ...props}) => (
  <TouchableOpacity
    style={[{backgroundColor: color}, styles.buttonStyle, style]}
    onPress={onPress}
    {...props}>
    {children}
    <FText color="#ffffff" fontSize={28}>
      {title}
    </FText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonStyle: {
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 16,
  },
});

FButton.defaultProps = {
  color: GBStyles.submitButton,
  title: '',
  onPress: () => {},
};

export default FButton;
