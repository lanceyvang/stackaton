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
    <Text>Write Review Here</Text>

  </View>
);

export default Test;
