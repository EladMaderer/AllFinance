import React from 'react';
import {Text, StyleSheet} from 'react-native';
import GStyles from '../global/globalStyles';
import PropTypes from 'prop-types';

const FText = ({children, bold, fontSize, color, link, style, ...props}) => (
  <Text
    style={[
      style,
      {
        fontFamily: bold ? GStyles.fontFamilyBold : GStyles.fontFamily,
        color: link ? GStyles.linkBlue : color,
        fontSize,
      },
    ]}
    {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({});

FText.defaultProps = {
  bold: false,
  fontSize: 24,
  color: GStyles.primaryText,
  link: false,
};

FText.propTypes = {
  bold: PropTypes.bool,
};

export default FText;
