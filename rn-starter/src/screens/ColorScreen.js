import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function ColorScreen() {

  const [colors, setColors] = useState([])

  function addColor() {
    setColors([...colors, randomRgb()])
    console.log(colors)
  }

  return (
    <View>
      <Button title="Add a Color" onPress={addColor} />
      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />
        }}
      />
    </View>
  )
}

function randomRgb() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  colorBox: {
    height: 100,
    width: 100
  }
})