import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import Colors from './src/global/globalStyles';
import FText from './src/common/FText';

//rsi - creating a React functional component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <FText>Clean sheet</FText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBG,
  },
});

export default App;
