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
    <Text>Change your profile here.</Text>

  </View>
);

export default Test;
