import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FText, FTextInput} from '../common';
import {Formik} from 'formik';

const SignIn = props => {
  return (
    <View style={styles.loginContainer}>
      <FText>Sign in screen</FText>
      <View style={styles.formStyle}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <FTextInput
                keyboardType="email-address"
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <FTextInput
                autoCorrect={false}
                keyboardType="password"
                name="password"
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {/*<Button onPress={handleSubmit} title="Submit" />*/}
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  formStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});

export default SignIn;
