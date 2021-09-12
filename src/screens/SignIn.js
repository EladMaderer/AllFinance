import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FTextInput, FButton, FText} from '../common';
import {Formik, Field} from 'formik';
import {loginValidationSchema} from '../utilities/yupValidation';
import {signIn} from '../actions/signInActions';
import {encrypt_password} from '../utilities/utilities';
import {nav} from '../global/globalConst';
import GBStyles from '../global/globalStyles';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const userDetails = useSelector(
    ({signUpReducer}) => signUpReducer.userDetails,
  );
  const submit = values => {
    const user = userDetails.find(
      ({email, password}) =>
        email === values.email &&
        password === encrypt_password(values.password),
    );
    user ? dispatch(signIn(user)) : alert('Wrong username or password');
  };
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        // onSubmit={values => dispatch(signIn(values.email))}>
        onSubmit={values => submit(values)}>
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
        style={styles.signUpBtn}
        onPress={() => navigation.navigate(nav.SIGN_UP)}>
        <FText link fontSize={28}>
          Sign Up
        </FText>
      </TouchableOpacity>
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
  formStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  formButton: {
    marginTop: 14,
  },
  signUpBtn: {
    position: 'absolute',
    bottom: 70,
    borderBottomWidth: 1,
    borderColor: GBStyles.linkBlue,
    paddingHorizontal: 12,
  },
});

export default SignIn;
