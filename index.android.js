//File: index.android.js
/*
================================================================================
Release Date        Change Date         Author              Change Description
30/08/2017          27/08/2017          Adalberto P.        Initial Creation
*/
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./android/app/src/main/images/logos/genemix-blue.png')}></Image>
        <Text>Welcome to GenesaretMixcum App!</Text>
        <Text>This is the born of GenesaretMixcum Android App.</Text>
        <Text>Born on:27/08/2017</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4caf69',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('GenesaretMixcum',() => App);
