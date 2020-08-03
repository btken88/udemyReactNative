import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

export default function ListScreen() {
  const friends = [
    {
      name: 'Friend 1',
      age: 32
    },
    {
      name: 'Friend 2',
      age: 37
    },
    {
      name: 'Friend 3',
      age: 29
    },
    {
      name: 'Friend 4',
      age: 22
    },
    {
      name: 'Friend 5',
      age: 38
    },
    {
      name: 'Friend 6',
      age: 31
    },
    {
      name: 'Friend 7',
      age: 28
    },
    {
      name: 'Friend 8',
      age: 25
    },
    {
      name: 'Friend 9',
      age: 22
    },
  ]
  return (
    <View>
      <Text>Friends List</Text>
      <FlatList
        data={friends}
        keyExtractor={friend => friend.name}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    marginVertical: 18
  }
})