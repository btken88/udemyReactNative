import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorAdjustor from '../components/ColorAdjustor'

export default function SquareScreen() {
  const [redCount, setRedCount] = useState(0)
  const [greenCount, setGreenCount] = useState(0)
  const [blueCount, setBlueCount] = useState(0)

  return (
    <View>
      <ColorAdjustor color='Red' colorCount={redCount} setColorCount={setRedCount} />
      <ColorAdjustor color='Green' colorCount={greenCount} setColorCount={setGreenCount} />
      <ColorAdjustor color='Blue' colorCount={blueCount} setColorCount={setBlueCount} />
      <View style={{
        height: 100,
        width: 100,
        backgroundColor: `rgb(${redCount}, ${greenCount}, ${blueCount})`
      }} />
    </View>
  )
}

const styles = StyleSheet.create({})
