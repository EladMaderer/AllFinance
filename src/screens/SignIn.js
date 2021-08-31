import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FTextInput, FButton} from '../common';
import {Formik, Field} from 'formik';
import {loginValidationSchema} from '../components/yupValidation';

const SignIn = props => {
  return (
    <View style={styles.loginContainer}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => alert(JSON.stringify(values))}>
        {({handleSubmit, isValid}) => (
          <>
            <Field
              component={FTextInput}
              keyboardType="email-address"
              name="email"
              placeholder="Email Address"
            />
            <Field
              component={FTextInput}
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <FButton
              // color="red"
              title="Submit"
              style={styles.formButton}
              onPress={handleSubmit}
              // disabled={!isValid}
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
