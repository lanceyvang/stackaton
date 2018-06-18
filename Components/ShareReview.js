import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Rating} from 'react-native-elements'
import { Header, Button, Item, Input, Form, Textarea } from 'native-base';


export default class SingleView extends Component {
  constructor() {
    super()
    this.state = {}
    this.ratingCompleted = this.ratingCompleted.bind(this);
  }
  ratingCompleted(rating) {
    // console.log("Rating is: " + rating)
  }
  render() {
    return (
      <View >
        <Header />
        <Card>
          <Item rounded>
            <Input style={{textAlign: 'center'}} placeholder='Resturant Name' />
          </Item>
          <Rating
            type="heart"
            ratingCount={5}
            fractions={0}
            startingValue={3}
            imageSize={40}
            onFinishRating={this.ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
          <Form>
            <Textarea rowSpan={15} bordered placeholder="Write your review here." />
          </Form>
        </Card>
        <Button block danger style={{margin: 15}}>
          <Text>Submit</Text>
        </Button>
      </View>
    )
  }
}

// implemented without image with header
