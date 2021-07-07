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
                <Thumbnail source={{ uri: 'https://yt3.ggpht.com/-ThETAy9Qcm4/AAAAAAAAAAI/AAAAAAAAAAA/k777ngq8xGs/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg' }} />
                <Body>
                  <Text>Mark Weins</Text>
                  <Text note>June 18, 2018</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text>Katz’s Delicatessen</Text>
                  <Text note>Rebuen with Pastrami</Text>
                  <Rating
                    type="heart"
                    imageSize={20}
                    readonly
                    startingValue={4}
                  // style={{ styles.rating }}
                  />
                </Body>
              </Right>
            </CardItem>
            <CardItem>
              <Image source={{ uri: 'https://photos.smugmug.com/New-York-City/i-2pCXSmw/0/X3/katzs-deli-2-X3.jpg' }} style={{ height: 300, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Text>
                When I ate at Katz’s Delicatessen, my wife and I ordered the reuben with pastrami, and a half corned beef, with a side of coleslaw and a plate of pickles. The corned beef was alright, nothing special for me, but the reuben pastrami was insane. Also, I didn’t care for the coleslaw as it was quite sweet, but the kosher pickles were excellent.
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
