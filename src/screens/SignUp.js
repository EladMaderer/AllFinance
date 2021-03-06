import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Field} from 'formik';
import {signUpValidationSchema} from '../utilities/yupValidation';
import {encrypt_password} from '../utilities/utilities';
import {FButton, FText, FTextInput} from '../common';
import {nav} from '../global/globalConst';
import {signUp} from '../actions/signUpActions';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const users = useSelector(({signUpReducer}) => signUpReducer.registeredUsers);
  const submit = values => {
    if (!users.find(user => user.email === values.email)) {
      dispatch(
        signUp({
          ...values,
          password: encrypt_password(values.password),
          confirmPassword: encrypt_password(values.confirmPassword),
        }),
      );
      navigation.navigate(nav.SIGN_IN);
    } else {
      alert(`Email address ${values.email} already exists`);
    }
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
