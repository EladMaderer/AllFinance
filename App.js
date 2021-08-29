import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GStyles from './src/global/globalStyles';
import Navigation from './src/navigation/Navigation';

//rsi - creating a React functional component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GStyles.appBG,
  },
});

export default App;
