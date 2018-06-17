import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Rating } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class SingleView extends Component {
  constructor() {
    super()
    this.state = {}
    this.ratingCompleted = this.ratingCompleted.bind(this);
  }
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  render() {
    return (
      <View style={styles.container}>
        <Rating
          type="heart"
          ratingCount={5}
          fractions={1}
          startingValue={3}
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          showRating
          style={{ paddingVertical: 10 }}
        />
      </View>
    )
  }
}
