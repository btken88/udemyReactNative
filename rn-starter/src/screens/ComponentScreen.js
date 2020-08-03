import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

export default ComponentScreen = () => {

  const name = 'Bryce'

  return (
    <View>
      <Text style={styles.largeTextStyle}>Getting started with React Native</Text>
      <Text style={styles.smallTextSize}>My name is {name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  largeTextStyle: {
    fontSize: 45
  },
  smallTextSize: {
    fontSize: 20
  }
});
