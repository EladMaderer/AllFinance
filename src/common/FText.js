import React from 'react';
import {Text, StyleSheet} from 'react-native';
import GStyles from '../global/globalStyles';
import PropTypes from 'prop-types';

const FText = ({children, bold, fontSize, color, style, ...props}) => (
  <Text
    style={[
      styles.container,
      style,
      {
        fontFamily: bold ? GStyles.fontFamilyBold : GStyles.fontFamily,
        color,
        fontSize,
      },
    ]}
    {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    color: GStyles.primaryText,
  },
});

FText.defaultProps = {
  bold: false,
  fontSize: 24,
  color: GStyles.primaryText,
};

FText.propTypes = {
  bold: PropTypes.bool,
};

export default FText;
