import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const COLOR_INCREMENT = 10
export default function ColorAdjustor({ color, colorCount, setColorCount }) {

  function incrementColorCount() {
    if (colorCount + COLOR_INCREMENT < 255) {
      setColorCount(colorCount + COLOR_INCREMENT)
    } else setColorCount(255)
  }

  function decrementColorCount() {
    if (colorCount - COLOR_INCREMENT > 0) {
      return setColorCount(colorCount + COLOR_INCREMENT)
    } else setColorCount(0)
  }

  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={incrementColorCount} />
      <Button
        title={`Decrease ${color}`}
        onPress={decrementColorCount} />
    </View>
  )
}

const styles = StyleSheet.create({})