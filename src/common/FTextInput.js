import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import GStyles from '../global/globalStyles';
import FText from './FText';

const FTextInput = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <>
      <TextInput
        style={styles.container}
        placeholderTextColor={GStyles.appBGLight}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="off"
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      <View style={styles.errorMsg}>
        {hasError && (
          <FText color="#d10a0a" fontSize={22}>
            {errors[name]}
          </FText>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: 14,
    backgroundColor: GStyles.secondaryText,
    height: 60,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 24,
    fontFamily: GStyles.fontFamily,
    textAlignVertical: 'bottom',
  },
  errorMsg: {
    height: 35,
    marginBottom: 14,
    marginTop: 2,
  },
});

export default FTextInput;
