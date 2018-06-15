import React from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const Test = () => (
  <View style={styles.container}>
    <Text>Test Screen NUMBER 2!</Text>

  </View>
);

export default Test;
