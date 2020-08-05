import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function ColorAdjustor({ color, onIncrease, onDecrease }) {

  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={onIncrease} />
      <Button
        title={`Decrease ${color}`}
        onPress={onDecrease} />
    </View>
  )
}

const styles = StyleSheet.create({})