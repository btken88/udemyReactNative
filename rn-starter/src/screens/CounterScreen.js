import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function CounterScreen(props) {
  const [count, setCount] = useState(0)
  return (
    <View>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
      <Text>Current Count: {count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})