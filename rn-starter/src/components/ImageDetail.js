import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ImageDetail(props) {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image rating - {props.score}</Text>
    </View >
  )
}

const styles = StyleSheet.create({})