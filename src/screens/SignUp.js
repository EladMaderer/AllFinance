import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik, Field} from 'formik';
import {signUpValidationSchema} from '../components/yupValidation';
import {FButton, FTextInput} from '../common';

const SignUp = props => {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{username: '', email: '', password: ''}}
        onSubmit={values => alert(values.username)}>
        {({handleSubmit}) => (
          <>
            <Field
              component={FTextInput}
              name="username"
              placeholder="Username"
            />
            <Field
              component={FTextInput}
              keyboardType="email-address"
              name="email"
              placeholder="Email Address"
            />
            <Field
              component={FTextInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Field
              component={FTextInput}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <FButton
              styles={styles.formButton}
              title="Sign Up"
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
  container: {
    flex: 1,
    marginTop: '30%',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  formButton: {
    marginTop: 14,
  },
});

export default SignUp;
