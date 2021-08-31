import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FTextInput, FButton, FText} from '../common';
import {Formik, Field} from 'formik';
import {loginValidationSchema} from '../components/yupValidation';
import {signIn} from '../actions/signInActions';

const SignIn = props => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(state => state.signInReducer.userSignedIn);
  const email = useSelector(state => state.signInReducer.email);
  return (
    <View style={styles.loginContainer}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => dispatch(signIn(true, values.email))}>
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
      {isSignedIn && <FText>Signed in, welcome {email}</FText>}
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
