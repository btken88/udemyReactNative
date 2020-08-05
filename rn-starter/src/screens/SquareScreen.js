import React, { useReducer } from 'react'
import { View, StyleSheet } from 'react-native'
import ColorAdjustor from '../components/ColorAdjustor'

const COLOR_INCREMENT = 10

function reducer(state, action) {
  switch (action.color) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}

export default function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

  return (
    <View>
      <ColorAdjustor color='Red'
        onIncrease={() => dispatch({ color: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ color: 'red', amount: -1 * COLOR_INCREMENT })} />
      <ColorAdjustor color='Green'
        onIncrease={() => dispatch({ color: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ color: 'green', amount: -1 * COLOR_INCREMENT })} />
      <ColorAdjustor color='Blue'
        onIncrease={() => dispatch({ color: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ color: 'blue', amount: -1 * COLOR_INCREMENT })} />
      <View style={{
        height: 100,
        width: 100,
        backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
      }} />
    </View>
  )
}

const styles = StyleSheet.create({})
