import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik, Field} from 'formik';
import {loginValidationSchema} from '../components/yupValidation';
import {FText} from '../common';

const SignUp = props => {
  return (
    <View style={styles.container}>
      <FText>Signup page</FText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '50%',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default SignUp;
