import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {FTextInput, FButton, FText} from '../common';
import {Formik, Field} from 'formik';
import {loginValidationSchema} from '../components/yupValidation';
import {signIn} from '../actions/signInActions';
import {nav} from '../global/globalConst';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => dispatch(signIn(values.email))}>
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
              title="Submit"
              style={styles.formButton}
              onPress={handleSubmit}
              // disabled={!isValid}
            />
          </>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate(nav.SIGN_UP)}>
        <FText link fontSize={28} style={styles.signUpText}>
          Sign Up
        </FText>
      </TouchableOpacity>
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
  formStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  formButton: {
    marginTop: 14,
  },
  signUp: {
    position: 'absolute',
    bottom: 70,
  },
  signUpText: {
    textDecorationLine: 'underline',
  },
});

export default SignIn;
