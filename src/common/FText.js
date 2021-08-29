import React from 'react';
import {Text, StyleSheet} from 'react-native';
import GStyles from '../global/globalStyles';
import PropTypes from 'prop-types';

const FText = ({children, bold, fontSize, style, ...props}) => (
  <Text
    style={[
      styles.container,
      style,
      {
        fontFamily: bold ? GStyles.fontFamilyBold : GStyles.fontFamily,
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
};

FText.propTypes = {
  bold: PropTypes.bool,
};

export default FText;
