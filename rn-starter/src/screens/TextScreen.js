import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function TextScreen() {
  const [password, setPassword] = useState('')
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={newText => setPassword(newText)} />
      {password.length > 5 ? null : <Text>Password must be longer than 5 characters</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 2,
    borderWidth: 1
  }
})