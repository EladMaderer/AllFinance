import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FText, FTextInput, FButton} from '../common';
import {Formik} from 'formik';
import {loginValidationSchema} from '../components/yupValidation';

const SignIn = props => {
  return (
    <View style={styles.loginContainer}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => alert(JSON.stringify(values))}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <FTextInput
              keyboardType="email-address"
              name="email"
              placeholder="Email Address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
            />
            <FTextInput
              autoCorrect={false}
              name="password"
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              error={errors.password}
            />
            <FButton
              // color="red"
              title="Submit"
              style={styles.formButton}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    marginTop: '25%',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  formStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  formButton: {
    marginTop: 14,
  },
});

export default SignIn;
