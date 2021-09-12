import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Field} from 'formik';
import {signUpValidationSchema} from '../utilities/yupValidation';
import {encrypt_password} from '../utilities/utilities';
import {FButton, FText, FTextInput} from '../common';
import {signUp} from '../actions/signUpActions';

const SignUp = props => {
  const dispatch = useDispatch();
  const users = useSelector(({signUpReducer}) => signUpReducer.userDetails);
  const submit = values => {
    !users.find(user => user.email === values.email)
      ? dispatch(
          signUp({
            ...values,
            password: encrypt_password(values.password),
            confirmPassword: encrypt_password(values.confirmPassword),
          }),
        )
      : alert(`Email address ${values.email} already exists`);
  };
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{username: '', email: '', password: ''}}
        onSubmit={values => submit(values)}>
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
      <FText>{JSON.stringify(users)}</FText>
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
