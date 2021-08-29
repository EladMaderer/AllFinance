import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../global/globalStyles';

const FText = ({children, ...props}) => (
  <Text style={styles.container} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    color: Colors.primary,
  },
});
export default FText;
