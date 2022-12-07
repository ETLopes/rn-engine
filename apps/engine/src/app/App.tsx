import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';
import LoginScreen from './Login';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"  />
      <SafeAreaView style={styles.container}>
        <LoginScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});



export default App;
