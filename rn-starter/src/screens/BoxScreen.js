import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textOneStyle: {
    height: 100,
    width: 100,
    borderColor: 'red',
    borderWidth: 3,
    backgroundColor: 'purple'
  },
  textTwoStyle: {
    height: 100,
    width: 100,
    borderColor: 'red',
    borderWidth: 3,
    backgroundColor: 'orange',
    top: 100
  },
  textThreeStyle: {
    height: 100,
    width: 100,
    borderColor: 'red',
    borderWidth: 3,
    backgroundColor: 'green'
  }
})