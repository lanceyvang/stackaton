import React, { Component } from 'react';
import { Image } from 'react-native';
import { Right, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Rating } from 'react-native-elements';

export default class CardShowcaseExample extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://i.imgur.com/8SxyxAg.jpg' }} />
                <Body>
                  <Text>Yang Vang</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text>Shake Shack</Text>
                  <Text note>ShackBurger</Text>
                  <Rating
                    type="heart"
                    imageSize={20}
                    readonly
                    startingValue={3}
                  // style={{ styles.rating }}
                  />
                </Body>
              </Right>
            </CardItem>
            <CardItem>
              <Image source={{ uri: 'https://i.imgur.com/2qaSZT3.jpg' }} style={{ height: 300, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Text>
                This is the best burger I've had! I recommend ordering ahead using the their app because wait times can get past 30+ minutes.
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="thumbs-up" />
                  <Text>Like</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="chatbubbles" />
                  <Text>Comment</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="ios-share-alt-outline" />
                  <Text>Share</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
