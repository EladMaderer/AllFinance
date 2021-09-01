import React from 'react';
import {View} from 'react-native';
import {FText} from '../common';
import {useSelector} from 'react-redux';

const HomePage = props => {
  const isSignedIn = useSelector(state => state.signInReducer.userSignedIn);
  const email = useSelector(state => state.signInReducer.email);
  return (
    <View>
      <FText>Signed in, welcome {email}</FText>
    </View>
  );
};

export default HomePage;
