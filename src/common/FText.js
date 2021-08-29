import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../global/globalStyles';

const FText = ({children, bold, fontSize, style, ...props}) => (
  <Text
    style={[
      styles.container,
      style,
      {fontFamily: bold ? 'Teko-Bold' : 'Teko-Medium', fontSize},
    ]}
    {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    color: Colors.primaryText,
  },
});

FText.defaultProps = {
  bold: false,
  fontSize: 24,
};

export default FText;
