import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is the Home Page</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')} />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo" />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to ImageScreen Demo" />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to CounterScreen Demo" />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to ColorScreen Demo" />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to SquareScreen Demo" />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

